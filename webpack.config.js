const HtmlWebPack=require('html-webpack-plugin')
const MiniCssExtrac = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports={
    mode:'development',//pone al main en modo de desarrollo



    output:{ //limpia los archivos q hemos reemplazados desde los plugins 
        clean:true
    },

    module:{
        rules:[
            {     //i si le ponemos eso es sensible a las ,ayusculas y las minusculas 
                test:/\.html$/i,       //espresion regular ver ay algo contiene algo
                loader:"html-loader",
                options:{
                    sources:false
                },
            },


           {
             test:/\.css$/i,
             exclude:/style.css$/,
             use: ['style-loader', 'css-loader' ] 
           },


           {
               test:/style.css$/,
               use:[ MiniCssExtrac.loader, 'css-loader']
           },
           
           {
                test:/\.(png|jpe?g|gif)$/,
                loader:'file-loader'
           }

        ],
    },


    optimization:{

    },
//configurar nueva instancia de 
    plugins:[
                 new HtmlWebPack({
                title:'Mi web pack app',
                // filename: 'index.html', //aqui cambia en nombre de un archivo en dist
                 template:"./src/index.html",//le digo que los cambios lo hagas a partir del index dentros den src y los pase a ;a carpeta dist
            
        }),
                new MiniCssExtrac({
                filename:'[name].css',
                ignoreOrder:false
        }),

        new CopyPlugin({
            patterns:[
                {from:'src/assets/', to: 'assets/'}
            ]
        })
    ],
}
