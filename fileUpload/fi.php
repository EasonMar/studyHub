<?php 
	header("Content-Type:text/html;charset:utf8");//设置文件编码
	// $img = $_FILES['file'];
	// echo $img['error'].'<br>';
	// echo $img['name'].'<br>';
	// echo $img['type'].'<br>';
	// echo $img['size'].'<br>';
	// echo $img['tmp_name'].'<br>';

	// 遍历$_FILES数组
	foreach ($_FILES as $f) {
		
		// 文件限制
		if ((($f["type"] == "image/gif")		
				|| ($f["type"] == "image/jpeg")
				|| ($f["type"] == "image/pjpeg"))
				&& ($f["size"] < 200000))
		{
			// 文件上传后移动到特定文件夹
			if ($f["error"] > 0){
				echo "Return Code: " . $f["error"] . "<br />";
			}else{
				echo "Upload: " . $f["name"] . "<br />";
				echo "Type: " . $f["type"] . "<br />";
				echo "Size: " . ($f["size"] / 1024) . " Kb<br />";
				echo "Temp file: " . $f["tmp_name"] . "<br />";
				// 注意，当前根目录是/testDemo
				if (file_exists("upload/" . $f["name"])){
					echo $f["name"] . " already exists. ";
				}else{
					move_uploaded_file($f["tmp_name"], "upload/" . $f["name"]);
					echo "Stored in: " . "upload/" . $f["name"];
				}
			}
			echo "<br /><br /><br />";	
		}else{
			echo "Invalid file";
		}
	}
 ?>