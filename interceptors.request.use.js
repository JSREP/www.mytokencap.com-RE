// 设置请求拦截器的代码
h.interceptors.request.use((function (e) {
        return function (e) {
            e.data = e.data || {},
                Object.keys(e.data).forEach((function (t) {
                        void 0 == e.data[t] && delete e.data[t]
                    }
                ));
            var t = l()().get("next-i18next")
                , n = Date.now().toString()
                , r = o()(n + "9527" + n.substr(0, 6));
            if (e.data.timestamp = n,
                e.data.code = r,
                e.data.platform = "web_pc",
                e.data.v = "0.1.0",
                e.data.language) {
                var i = e.data.language.split("_");
                i[1] = i[1].toUpperCase(),
                    i = i.join("_"),
                    e.data.language = i
            } else
                e.data.language = t ? (0,
                    f.m)(t) : "en_US";
            e.data.legal_currency || (e.data.legal_currency = l()().get("legal_currency") ? l()().get("legal_currency") : "USD");
            e.data.mytoken || (e.data.mytoken = l()().get("mytoken_sid"));
            e.data.international = e.data.international || 1,
                "post" === e.method ? e.data = u().stringify(e.data) : (e.url = e.url + "?",
                    e.url += u().stringify(e.data))
        }(e),
            p.server,
            e.baseURL = d,
            e
    }
), (function (e) {
        return console("\u9519\u8bef\u7684\u4f20\u53c2"),
            Promise.reject(e)
    }
)),