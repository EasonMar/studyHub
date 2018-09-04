var fs = require("fs");

console.log("准备打开文件！");
fs.stat('./src/cong1.jpg', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});

/**
 * Stats {
 *    dev: 768177, 		// 包含文件的设备的数值型标识
 *    mode: 33206,		// 表示文件类型与模式的位域
 *    nlink: 1,			// 文件的硬链接数量
 *    uid: 0,			// 文件拥有者的数值型用户标识
 *    gid: 0,			// 拥有文件的群组的数值型群组标识
 *    rdev: 0,			// 如果文件是一个特殊文件，则返回数值型的设备标识
 *    blksize: undefined,			// 文件系统用于 I/O 操作的块大小
 *    ino: 3096224744153923,		// 文件系统特定的文件索引节点数值
 *    size: 13085,					// 文件的字节大小
 *    blocks: undefined,			// 分配给文件的块的数量
 *    atimeMs: 1531904586691.9414,  // 表示文件最后一次被访问的时间戳
 *    mtimeMs: 1521170848194.2866,	// 表示文件最后一次被修改的时间戳
 *    ctimeMs: 1531904586693.9417,	// 表示文件状态最后一次被改变的时间戳
 *    birthtimeMs: 1531904586691.9414,		// 表示文件的创建时间戳
 *    atime: 2018-07-18T09:03:06.692Z,		// 表示文件最后一次被访问的时间
 *    mtime: 2018-03-16T03:27:28.194Z,		// 表示文件最后一次被修改的时间
 *    ctime: 2018-07-18T09:03:06.694Z,		// 表示文件状态最后一次被改变的时间
 *    birthtime: 2018-07-18T09:03:06.692Z 	// 表示文件的创建时间
 * }
 */