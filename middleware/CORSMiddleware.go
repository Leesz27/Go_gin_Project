/* -*- coding:utf-8 -*-
 * @Author: Lee
 * @Datetime: 2022/8/22 23:40
 * @Software: GoLand
 */

package middleware

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// 允许访问的端口号，*为全部
		ctx.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
		// 缓存时间
		ctx.Writer.Header().Set("Access-Control-Max-Age", "86400")
		// 设置可以通过访问的方法,*为全部
		ctx.Writer.Header().Set("Access-Control-Allow-Methods", "*")
		// 设置可以请求的请求头
		ctx.Writer.Header().Set("Access-Control-Allow-Headers", "*")
		//
		ctx.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if ctx.Request.Method == http.MethodOptions {
			ctx.AbortWithStatus(200)
		} else {
			ctx.Next()
		}
	}
}
