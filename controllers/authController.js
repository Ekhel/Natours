const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.singup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Cek Jika Email dan Password Cocok
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  // 2) Check Jika email cocok dan Password tidak cocok

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) Jika Inputran Email dan User Valid ! Kirim Token ke client
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
};

exports.protect = catchAsync(async (req, rest, next) => {
  // 1) Ambil Token dan Check token itu ada
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // 2) Verifikasi Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);

  // 3) Cek Jika User tetap dalam Session Login JWT
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  // 4) Cek Jika User Mengganti Password Ketika Token telah buat
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  req.user = currentUser;

  next();
});
