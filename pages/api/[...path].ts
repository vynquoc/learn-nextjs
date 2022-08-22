import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from 'http-proxy'
import Cookies from "cookies";
type Data = {
    name: string
}
export const config = {
    api: {
        bodyParser: false
    }
}
const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return new Promise((resolve) => {
        const cookies = new Cookies(req, res) 
        const access_token = cookies.get('access_token')
        if (access_token) {
            req.headers.authorization = `Bearer ${access_token}`
        }
        req.headers.cookie = ''
        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false
        })
        proxy.once("proxyRes", () => {
            resolve(true)
        })
    })
    // res.status(200).json({name: 'vy'})
}