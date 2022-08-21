import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from 'http-proxy'
type Data = {
    name: string
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    req.headers.cookie = ''
    proxy.web(req, res, {
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false
    })
    // res.status(200).json({name: 'vy'})
}