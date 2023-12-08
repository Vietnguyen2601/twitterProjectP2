//import các interface để định dạng kiểu cho para của middleware
import { Request, Response, NextFunction } from 'express'

//1 request của client gửi lên server sẽ có body(chứa các phần cần gửi)
export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  // vào body láy email và password
  console.log(req.body)
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json('Missing email or password')
  }
  next()
}
