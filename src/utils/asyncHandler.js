const asyncHandler = (fn) => {
   (req, res, next ) =>{
    Promise.resolve(fn(req, re , next)).catch ((err)  => next(err)) 
  }
}

export{asyncHandler};

