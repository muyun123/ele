const MongoClient = require('mongodb').MongoClient;
const arr = [{
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/09/1afa6d01654aa671e322ac6c7ec50jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/2/91/19cd6a056acbf72aabf44fc01bf14jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/4c/c05d0f9daf16be4e668a5c5be5762jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/0/d2/45bd4370d6ba112b6600836055adepng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/09/1afa6d01654aa671e322ac6c7ec50jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/09/1afa6d01654aa671e322ac6c7ec50jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/e/91/09190a00f338da98a016027100022jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/2/91/19cd6a056acbf72aabf44fc01bf14jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/5/51/46ae198e383543175fc9953cdb60bjpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/e/91/09190a00f338da98a016027100022jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/4/cb/7ec7c6ee23c97db61a4fc2faed16djpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/e/91/09190a00f338da98a016027100022jpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/4/38/a745dabc944d97f2ea82cd05d7350jpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/e/89/d75f78221b41a1606625c6c992a3djpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/60/d394dbf3e572b818f7dffcdeaa91cjpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/2/91/19cd6a056acbf72aabf44fc01bf14jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/e/91/09190a00f338da98a016027100022jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/4/28/0c77f0aa4635b7e80493a2600c9a5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/b1/19f42ddf395dde0b43645e5eddee7jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/4/d7/32ab5547218b79e3e613c1d70237ejpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/e3/3d16e92f1a4e06ddcbcbf7d0fc834jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/86/e6cd154f1cd48e0eb6fd207973711jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/86/e6cd154f1cd48e0eb6fd207973711jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/86/e6cd154f1cd48e0eb6fd207973711jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/e3/3d16e92f1a4e06ddcbcbf7d0fc834jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/e3/3d16e92f1a4e06ddcbcbf7d0fc834jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/86/e6cd154f1cd48e0eb6fd207973711jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/86/e6cd154f1cd48e0eb6fd207973711jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/86/e6cd154f1cd48e0eb6fd207973711jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/1d/c45b87748f241ca345b9161e1f794jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/6/7d/81291bea0766180299cb0809544b8jpeg.jpeg?x-oss-process=image/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/09/1afa6d01654aa671e322ac6c7ec50jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/2/91/19cd6a056acbf72aabf44fc01bf14jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/4c/c05d0f9daf16be4e668a5c5be5762jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/7/23/1f221da3f16f9d1f0118f63976563png.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/0/d2/45bd4370d6ba112b6600836055adepng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/09/1afa6d01654aa671e322ac6c7ec50jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/8/09/1afa6d01654aa671e322ac6c7ec50jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/e/91/09190a00f338da98a016027100022jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/2/91/19cd6a056acbf72aabf44fc01bf14jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/5/51/46ae198e383543175fc9953cdb60bjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/e/91/09190a00f338da98a016027100022jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/9/3a/5fe00a4999e7a6a06c580b622f4e8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}, {
    "restaurant_image_hash": "https://cube.elemecdn.com/f/8e/4e89034b0208d0714bddf580ee30djpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed"
}]
//  连接网址
const url = 'mongodb://localhost:27017';
//  数据库名称
const dbName = 'ele';
const conn = () => {
    return new Promise((resolve, reject) => {
        //  使用connect方法连接到服务器
        MongoClient.connect(url, {
                'useUnifiedTopology': true
            },
            function (err, client) {
                err ? reject(err) : resolve(client);
                console.log("Connected successfully to server");
                // client.close();
            });
    })
}

//obj格式{'a': 3}
const find = function (table, obj) {
    return new Promise(async (resolve, reject) => {
        const client = await conn();
        const db = client.db(dbName);
        //  获取文档集合
        const collection = db.collection(table);
        //  查找一些文件
        collection.find(obj ? obj : {}).toArray(function (err, result) {
            err ? reject(err) : resolve(result);
        });
        // client.close();
    })
};


const skip = function (table, num1, num2) {
    //跳过前面num1条数据，读取num2条数据
    return new Promise(async (resolve, reject) => {
        const client = await conn();
        const db = client.db(dbName);
        //  获取文档集合
        const collection = db.collection(table);
        collection.find().skip(num1).limit(num2).toArray(function (err, result) {
            err ? reject(err) : resolve(result);
        });
        client.close();
    })
};
//arr格式[{},{}]
const insert = function (table, arr) {
    return new Promise(async (resolve, reject) => {
        const client = await conn();
        const db = client.db(dbName);
        //  获取文档集合
        const collection = db.collection(table);
        //  插入一些文件
        collection.insertMany(arr, function (err, result) {
            err ? reject(err) : resolve(result);
        });
        client.close();
    })
}


async function da() {
    var a = await find('orders');
    var c = [];
    for (var i = 0; i < 73; i++) {
        var b = Object.assign(a[i], arr[i])
        // console.log(b);
        // var c = await
        c.push(b);
    }
    insert('orderr', c);
}
// da();
module.exports = {
    find,
    skip
}