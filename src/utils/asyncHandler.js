const asyncHandler = (fn) => {
  return (req, res, next ) =>{
    Promise.resolve(fn(req, re , next)).catch ((err)  => next(err)) 
  }
}

export{asyncHandler};

