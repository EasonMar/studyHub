<?php 
	header("Content-Type:text/html;charset:utf8");//设置文件编码
	
	// 输出json给前端

	$ret = array();
	$data = array();
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
				$data["code"] = $f["error"];
			}else{
				// 注意，当前根目录是/testDemo
				if (file_exists("upload/" . $f["name"])){
					$data["code"] = 416;
					$data["msg"] = "already exists.";
				}else{
					move_uploaded_file($f["tmp_name"], "upload/" . $f["name"]);
					$data["code"] = 200;
					$data["Type"] = $f["type"];
					$data["Size"] = ($f["size"] / 1024 . 'kb');
					$data["Temp_file"] = $f["tmp_name"];
					$data["Stored_in"] = "upload/" . $f["name"];
				}
			}
		}else{
			$data["code"] = 416;
			$data["msg"] = "Invalid file";
		}
		$res[$f["name"]] = $data;
	}

	echo json_encode($res);
 ?>