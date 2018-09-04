<?php
	// 第二种后台
	
	if(isset($_FILES["myfile"])){
		$res = array();

		// DIRECTORY_SEPARATOR是一个PHP常量，代表反斜杠，因为windows系统和linux系统的反斜杠不一样。
		$uploadDir = 'upload'.DIRECTORY_SEPARATOR;

		$dir = dirname(__FILE__).DIRECTORY_SEPARATOR.$uploadDir;

		file_exists($dir) || (mkdir($dir,0777,true) && chmod($dir,0777));

		//single file
		if(!is_array($_FILES["myfile"]["name"])){
			$fileName = $_FILES["myfile"]["name"];
			move_uploaded_file($_FILES["myfile"]["tmp_name"],$dir.$fileName);
			$res['file'] = DIRECTORY_SEPARATOR.$uploadDir.$fileName;
		}
		
		echo json_encode($res);
	}
?>
