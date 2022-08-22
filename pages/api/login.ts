import httpProxy, { ProxyResCallback } from 'http-proxy'
import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'
export const config = {
    api: {
        bodyParser: false
    }
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        return res.status(404).json({message: 'method not supported'})
    }

    return new Promise((resolve) => {
        req.headers.cookie = ''

        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = ''

            proxyRes.on('data', function(chunk) {
                body += chunk
            })

            proxyRes.on('end', function () {
               try {
                const { accessToken, expiredAt} = JSON.parse(body)
            
                const cookies = new Cookies(req, res, {secure: process.env.NODE_ENV !== 'development'})
                cookies.set('access_token', accessToken, {
                    httpOnly: true,
                    sameSite: 'lax',
                    expires: new Date(expiredAt)
                });
                (res as NextApiResponse).status(200).json({message: 'login successfully'})
               } catch (error) {
                (res as NextApiResponse).status(500).json({message: 'SERVER ERORR!!!'})
               }
               resolve(true)
            })
        }

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true 
        })

        proxy.once('proxyRes', handleLoginResponse)
    })
}