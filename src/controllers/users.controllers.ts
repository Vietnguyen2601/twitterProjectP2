import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'lehodiep.1999@gmail.com' && password === '123123123') {
    return res.json({
      data: [
        { fname: 'Điệp', yob: 1999 },
        { fname: 'Hùng', yob: 2003 },
        { fname: 'Được', yob: 1994 }
      ]
    })
  } else {
    return res.status(400).json({ error: 'Login failed' })
  }
}
