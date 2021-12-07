module.exports = {
    async headers() {
        return [
            {
                source: '/Build/Build/Build.framework.js.br',
                headers: [
                    {
                        key: 'Content-Encoding',
                        value: 'br',
                    },
                ],
            },
            {
                source: '/Build/Build/Build.data.br',
                headers: [
                    {
                        key: 'Content-Encoding',
                        value: 'br',
                    },
                ],
            },
            {
                source: '/Build/Build/Build.wasm.br',
                headers: [
                    {
                        key: 'Content-Encoding',
                        value: 'br',
                    },
                    {
                        key: 'Content-Type',
                        value: 'application/wasm'
                    }
                ],
            },
        ]
    }
}