const fs = require('fs');

var data = `安徽 	安庆市	大观区	安庆艾诺体检分院 	大观区皇冠路（大观政府正对面） XXXX
安徽 	蚌埠市	蚌山区	蚌埠艾诺体检分院 	蚌山区胜利东路1556号（华海又一城三楼）   XXXX
安徽 	蚌埠市	龙子湖区	蚌埠美年大健康体检分院 	龙子湖区广场西路19号5层（安德数码广场1号门旁）   XXXX
安徽 	亳州市	谯城区	亳州美年大健康体检分院 	亳州市谯城区芍花路188号帝都大厦6楼  XXXX
安徽 	滁州市	琅琊区	滁州艾诺体检分院 	琅琊区凤阳北路318号（逸夫小学旁）   XXXX
安徽 	合肥市	包河区	合肥美年大健康滨湖分院 	徽州大道与锦绣大道交口要素大市场A区1层  XXXX
安徽 	合肥市	巢湖市	巢湖艾诺体检分院 	巢湖市健康东路与世纪大道交叉口世纪花园1幢门面（安徽巢湖国际饭店西侧）   XXXX
安徽 	合肥市	庐阳区	合肥艾诺体检庐阳分院 	庐阳区阜阳北路与涡阳路交口  XXXX
安徽 	合肥市	蜀山区	合肥艾诺体检蜀山分院 	蜀山区西环中心广场1栋  XXXX
安徽 	合肥市	蜀山区	合肥美年大健康天鹅湖体检分院 	政务区潜山路与南二环交口新城国际大厦A座23层（近潜山路）   XXXX
安徽 	合肥市	蜀山区	合肥熙康体检望江路分院 	蜀山区望江西路206号华地新街A-2号（近岳西路）   XXXX
安徽 	合肥市	瑶海区	合肥普惠体检分院 	政务新区东流路与潜山路交叉口新城国际C座5层（近齐云山路）   XXXX
安徽 	淮北市	相山区	淮北艾诺体检分院 	相山区凤凰城仪凤路18号  XXXX
安徽 	淮南市	大通区	淮南艾诺体检分院 	大通区洞山东路居仁村一区  XXXX
安徽 	六安市	裕安区	六安艾诺体检御景湾分院 	裕安区河西四环恒大御景湾28栋商铺3楼  XXXX
安徽 	马鞍山市	雨山区	马鞍山美年大健康体检分院 	雨山西路1150号老报馆时代广场三层  XXXX
安徽 	芜湖市	镜湖区	芜湖爱康国宾镜湖分院 	黄山中路64号鼎湖1876国际文化旅游广场  XXXX
安徽 	芜湖市	镜湖区	芜湖美年大健康体检分院 	镜湖区华强广场A座写字楼5-6楼  XXXX
安徽 	芜湖市	鸠江区	芜湖艾诺体检分院 	芜湖市鸠江区伟星星立方3号门3楼（赤铸山中路与弋江北路交叉口） 去3号门电梯直达  XXXX
北京 	北京市	朝阳区	北京爱康国宾安华桥体检分院 	朝阳区北三环裕民中路12号5号楼1-3层  XXXX
北京 	北京市	朝阳区	北京爱康国宾酒仙桥分院 	朝阳区南十居28号东润枫景  XXXX
北京 	北京市	朝阳区	北京爱康国宾郡王府体检分院 	朝阳区朝阳公园南路21号  XXXX
北京 	北京市	朝阳区	北京爱康国宾丽都分院 	朝阳区将台路丽都饭店5号商业楼三层  XXXX
北京 	北京市	朝阳区	北京美年大健康大望路分院 	朝阳区西大望路15号外企大厦B座5层  XXXX
北京 	北京市	朝阳区	北京美年大健康太阳宫分院 	朝阳区太阳宫半岛国际公寓12号楼底商  XXXX
北京 	北京市	朝阳区	北京美年大健康望京分院 	朝阳区酒仙桥路12号电子科技大厦八层  XXXX
北京 	北京市	东城区	北京爱康国宾磁器口分院 	东城区珠市口东大街6号珍贝大厦2层  XXXX
北京 	北京市	东城区	北京美年大健康东四分院（美年中医分院）  	东城区朝阳门内大街296号瀚海科技大厦B座  XXXX
北京 	北京市	丰台区	北京爱康国宾总部基地体检分院 	北京市丰台区南四环西路188号1区31号楼，厦门国际银行旁  XXXX
北京 	北京市	海淀区	北京爱康国宾白石桥分院 	海淀区中关村南大街32号中关村科技发展大厦B座6层  XXXX
北京 	北京市	海淀区	北京爱康国宾知春路体检分院 	海淀区知春路甲48号盈都大厦D座三层（沃尔玛超市旁边）   XXXX
北京 	北京市	海淀区	北京美年大健康西直门分院 	海淀区西直门北大街45-6号  XXXX
北京 	北京市	顺义区	北京爱康国宾顺平体检分院 	顺义区顺平路南法信段9号院顺捷大厦A座二层203，204  XXXX
北京 	北京市	西城区	北京爱康国宾白云路分院 	西城区莲花池东路甲5号院1号楼二层  XXXX
北京 	北京市	西城区	北京爱康国宾西直门分院（4F）  	西城区西直门南大街2号成铭大厦D座4层  XXXX
北京 	北京市	西城区	北京美年大健康金融街分院 	西城区太平桥大街111号湘西大厦6-7层（加油站旁）   XXXX
北京 	北京市	西城区	北京美年大健康宣武门分院 	西城区宣武门外大街20号海格国际酒店3层  XXXX
福建 	福州市	仓山区	福州熙康体检分院 	仓山区浦上大道306号金山正祥广场4号楼（金山乐购右侧）   XXXX
福建 	福州市	鼓楼区	福州爱康国宾鼓楼分院 	鼓楼区六一北路328号金源花园三层  XXXX
福建 	福州市	台江区	福州美年大健康体检分院 	台江区台江路11号南星商城A座  XXXX
福建 	泉州市	丰泽区	泉州美年大健康体检分院 	东湖街道铭湖社区东湖综合大厦（1至4层）   XXXX
福建 	厦门市	思明区	厦门美年大健康嘉禾分院 	思明区嘉禾路339号四川大厦一层  XXXX
甘肃 	兰州市	城关区	兰州美年大健康金城分院 	城关区南滨河东路516号（甘肃画院东侧）   XXXX
甘肃 	兰州市	城关区	兰州美年大健康金茂分院 	城关区皋兰路51号  XXXX
甘肃 	兰州市	七里河区	兰州美年大健康金雨分院 	七里河区西津东路581号金雨大厦3楼  XXXX
广东 	东莞市	南城街道	东莞美年大健康分院 	南城区元美路23号黄金花园金裕楼1-2层  XXXX
广东 	佛山市	禅城区	佛山美年大健康禅城分院 	禅城区季华六路15号绿地中心三座三、四楼  XXXX
广东 	广州市	海珠区	广州熙康体检琶洲分院 	海珠区新港东路1068号中洲中心北塔四层  XXXX
广东 	广州市	天河区	广州爱康国宾花城大道南天广场分院 	天河区珠江新城花城大道7号南天广场5层  XXXX
广东 	广州市	天河区	广州爱康国宾林和西中泰体检分院 	天河区林和西路中泰国际广场商场5层  XXXX
广东 	广州市	天河区	广州爱康国宾天河华港花园分院 	天河区中山大道东方一路20-24号华港花园3层  XXXX
广东 	广州市	天河区	广州美年大健康天河东分院 	天河区天河东路153号富海商业中心1-3层  XXXX
广东 	广州市	天河区	广州美年大健康珠江新城分院 	天河区珠江新城花城大道86号高德汇2座3楼  XXXX
广东 	广州市	越秀区	广州爱康国宾环市东分院（3F）  	越秀区环市东路496号广发花园大厦3层  XXXX
广东 	广州市	越秀区	广州爱康国宾环市东分院（4F）  	越秀区环市东路496号广发花园大厦4层  XXXX
广东 	惠州市	惠城区	惠州美年大健康体检分院 	惠城区河南岸东鑫大厦A座1-3层  XXXX
广东 	深圳市	福田区	深圳爱康国宾福田分院 	福田区滨河路北彩田路东交汇处联合广场B座裙楼B201/203  XXXX
广东 	深圳市	福田区	深圳美年大健康财富大厦体检分院 	福田区福华三路88号财富大厦19层（福中三路与金田路交汇处东北角）   XXXX
广东 	深圳市	福田区	深圳美年大健康红岭分院 	福田区红岭南路1049号红岭大厦4-5栋裙楼二楼（邦德教育红岭书店楼下）   XXXX
广东 	深圳市	罗湖区	深圳爱康国宾罗湖分院 	罗湖区宝安南路3044号天地大厦1-3层  XXXX
广东 	深圳市	南山区	深圳爱康国宾科兴分院 	南山区高新科技园中区科苑路科兴科学院B座3单元3A层(4层)  XXXX
广东 	深圳市	南山区	深圳美年大健康美年体检分院 	南山区科苑中路6号深圳科技工业园大厦金融基地2栋12楼  XXXX
广东 	深圳市	南山区	深圳美年大健康南山体检分院 	南山区科技园高新南一道富诚科技大厦2楼  XXXX
广东 	深圳市	南山区	深圳美年大健康招商体检分院 	南山区南海大道与东滨路交汇处美年广场5栋7楼  XXXX
广东 	中山市	石岐区街道	中山美年大健康体检分院 	石岐区南基路2号兴中广场A座6-7层  XXXX
广东 	珠海市	香洲区	珠海美年大健康分院 	香洲区南湾南路3007号二楼整层（澳门环岛游码头对面）   XXXX
广西 	北海市	海城区	北海美年大健康体检分院 	海景大道北部湾1号雅苑商业区  XXXX
广西 	桂林市	临桂区	桂林美年大健康临桂分院 	临桂新区金水湾·境界龙脊夕照4#、5#商铺  XXXX
广西 	桂林市	七星区	桂林美年大健康七星分院 	七星区骖鸾路35号  XXXX
广西 	柳州市	城中区	柳州美年大健康体检分院 	城中区晨华路12号盛丰国际1栋2-1（交通银行正门上2楼）   XXXX
广西 	南宁市	江南区	南宁美年大健康江南分院 	江南区白沙大道48号川沪国际二楼  XXXX
广西 	南宁市	青秀区	南宁美年大健康琅东分院 	青秀区中越路7号东盟商务区东盟财经中心(金旺角CASA公馆B座3楼)  XXXX
贵州 	毕节市	七星关区	毕节爱康国宾松山路三江花园体检分院 	七星关社区松山路三江花园B栋1-2层  XXXX
贵州 	贵阳市	南明区	贵阳美年大健康康源分院 	南明区观水路46号  XXXX
贵州 	贵阳市	南明区	贵阳普惠体检分院 	南明区中山南路花果园一期16栋金融大厦5楼  XXXX
贵州 	黔东南苗族侗族自治州	凯里市	凯里爱康国宾永乐路体检分院 	凯里市永乐路28号1幢4层  XXXX
海南 	澄迈县	老城镇	海南熙康体检云舍分院 	澄迈镇老城经济开发区欣龙路与工业大道交汇处东北侧，东软海南软件园一期1号楼  XXXX
海南 	海口市	琼山区	海口美年大健康滨江分院 	琼山区滨江西路362号滨江度假城首层（海瑞大桥北200米处）   XXXX
海南 	海口市	秀英区	海口美年大健康秀英分院 	秀英区滨海大道159号福隆广场G栋4层慈铭体检（秀英港对面）   XXXX
河北 	邯郸市	邯山区	邯郸美年大健康体检分院 	邯山区渚河路282号金业国际大厦1-3层  XXXX
河北 	石家庄市	桥西区	石家庄美年大健康桥西分院 	桥西区友谊北大街75号  XXXX
河北 	石家庄市	长安区	石家庄美年大健康长安分院 	长安区东大街9号（凯旋金悦酒店旁）   XXXX
河北 	唐山市	路北区	唐山美年大健康分院（二分院）  	新华道与建设路的交叉口世博广场互联网科技中心A座4层、5层  XXXX
河南 	安阳市	文峰区	安阳美年大健康分院 	文峰区朝阳路与富泉街交叉口东北角  XXXX
河南 	济源市	沁园街道	济源美年大健康体检分院 	沁园南路济渎商务楼(高新技术产业集聚区综合楼)  XXXX
河南 	开封市	鼓楼区	开封美年大健康体检分院 	开封市黄河路南段与周天路交叉口向南50米路西  XXXX
河南 	洛阳市	老城区	洛阳美年大健康高新分院 	高新技术开发区滨河北路4号1栋（近海棠路）   XXXX
河南 	洛阳市	老城区	洛阳普惠体检分院 	新区政和路西段26号  XXXX
河南 	洛阳市	西工区	洛阳美年大健康西工分院 	西工区解放路香榭里4楼  XXXX
河南 	南阳市	宛城区	南阳美年大健康体检分院 	南阳市宛城区白河大道华安六号公馆1-3层（白河路泰山路路口西）   XXXX
河南 	平顶山市	新华区	平顶山美年大健康体检分院 	新华区建设路西段建宏国际大厦  XXXX
河南 	濮阳市	华龙区	濮阳美年大健康体检分院 	华龙区濮上路迎宾馆北200米路西  XXXX
河南 	许昌市	许昌市区	许昌美年大健康体检分院 	东城区许洲路与学府街交叉口向西100米空港新城二期商业楼三楼(许昌高铁站对面，许昌候机楼西邻)  XXXX
河南 	郑州市	管城回族区	郑州美年大健康商都分院 	郑东新区商都路55号亚星投资大厦一楼（近农业南路）   XXXX
河南 	郑州市	金水区	郑州美年大健康金水分院 	金水区文化路与农业路交叉口向东50米路南新时代广场4楼（省博物院斜对面）   XXXX
河南 	郑州市	金水区	郑州美年大健康中州分院 	金水区北环与中州大道交叉口山顶大厦  XXXX
河南 	郑州市	金水区	郑州普惠体检分院 	金水区郑汴路138号英协广场B座4楼  XXXX
河南 	周口市	川汇区	周口美年大健康体检分院 	川汇区周商大道法姬娜大酒店对侧  XXXX
黑龙江	哈尔滨市	道外区 	哈尔滨美年大健康道外分院	道外区哈尔滨市南直路359号  XXXX
黑龙江	哈尔滨市	南岗区 	哈尔滨美年大健康南岗分院	南岗区通达街和木兰街交口五瑞街40号  XXXX
湖北 	鄂州市	鄂城区	鄂州美年大健康炜裕分院 	鄂城区吴都大道炜裕时代广场2号楼（近古城路）   XXXX
湖北 	黄石市	大冶市	大冶美年大健康体检分院 	大冶市金湖大道15号梦湖书苑3楼全层（大冶一中对面）   XXXX
湖北 	十堰市	茅箭区	十堰美年大健康体检分院 	天津路88号大洋五洲E区中央广场负一楼  XXXX
湖北 	随州市	曾都区	随州美年大健康体检分院 	烈山大道中段261号（涢水宾馆对面）   XXXX
湖北 	武汉市	汉阳区	武汉美年大健康汉阳一博分院 	汉阳区二桥路19号汉江阳光城1-2F  XXXX
湖北 	武汉市	洪山区	武汉美年大健康光谷分院 	洪山区虎泉街228号永利国际大厦3楼  XXXX
湖北 	武汉市	江岸区	武汉美年大健康汉口江岸分院 	江岸区黄孝河路107号  XXXX
湖北 	武汉市	江岸区	武汉熙康体检京汉大智路分院 	江岸区大智路869号金地京汉1903琅目商业群二楼AE幢  XXXX
湖北 	武汉市	江汉区	武汉爱康国宾金墩体检分院 	江汉区后襄河北路59号海马公园1幢3层  XXXX
湖北 	武汉市	武昌区	武汉美年大健康武昌中北分院 	武昌区中北路108号广泽中心4F  XXXX
湖北 	武汉市	武昌区	武汉普惠体检分院 	武昌区水果湖街中北路23号船舶国际1818-2楼（汇廷精选酒店旁）   XXXX
湖北 	襄阳市	樊城区	襄阳美年大健康体检分院 	樊城区大庆西路31号九悦天城商业裙楼三楼  XXXX
湖北 	宜昌市	西陵区	宜昌美年大健康体检分院 	西陵区体育场北路169号（华祥商业中心一期2号楼4楼）   XXXX
湖南 	湘潭市	岳塘区	湘潭美年大健康体检分院 	岳塘区吉安路87号吉安大厦1-5层  XXXX
湖南 	长沙市	芙蓉区	长沙美年大健康芙蓉分院 	芙蓉区远大一路132号  XXXX
湖南 	长沙市	开福区	长沙爱康国宾八一桥分院 	开福区芙蓉中路一段593号（潇湘华天酒店六楼）   XXXX
湖南 	长沙市	雨花区	长沙爱康国宾阳光门诊部 	雨花区芙蓉中路三段509号中远公馆101房  XXXX
湖南 	长沙市	岳麓区	长沙爱康国宾河西西中心体检分院 	长沙市岳麓区枫林三路49号长沙西中心海沃四城T1/T2裙楼3A层）   XXXX
湖南 	长沙市	岳麓区	长沙仁术熙康健康体检分院 	岳麓区双塘路111号创远大厦4-5楼  XXXX
吉林 	吉林市	丰满区	吉林美年大健康世纪广场分院（一店）  	丰满区世纪广场园林综合楼(毛主席像右手边)  XXXX
吉林 	松原市	宁江区	松原美年大健康分院 	宁江区锦江大街330号  XXXX
吉林 	延边朝鲜族自治州	延吉市	延边美年大健康白山分院 	延吉市开发区长白东路11-3号（原福成肥牛，自治州国土局西侧，加油站旁）   XXXX
吉林 	长春市	宽城区	长春爱康国宾建设分院 	宽城区贵阳街287号建设大厦302-312室  XXXX
吉林 	长春市	南关区	长春美年大健康南关分院 	南关区解放大路438号全安广场盛荣大厦2、3楼（解放大路与大经路交汇处）   XXXX
江苏 	常州市	天宁区	常州爱康国宾通江南路体检分院 	天宁区通江南路238号爱特大厦F层  XXXX
江苏 	常州市	钟楼区	常州美年大健康体检分院 	钟楼区怀德中路82号澜天大厦一至四层  XXXX
江苏 	南京市	鼓楼区	南京爱康国宾鼓楼体检分院 	鼓楼区中央路19号金峰大厦3层  XXXX
江苏 	南京市	鼓楼区	南京美年大健康鼓楼分院 	鼓楼区中山北路49号机械大厦裙楼1-4层  XXXX
江苏 	南京市	建邺区	南京美年大健康秦淮分院（张府园）  	建邺区建邺路98号人保大厦2层  XXXX
江苏 	南京市	江宁区	南京爱康国宾江宁分院 	江宁区秣陵街道双龙大道1118号新都汇广场2层（近董村路）   XXXX
江苏 	南京市	玄武区	南京爱康国宾新街口分院 	玄武区中山东路145号全民健身中心19F  XXXX
江苏 	苏州市	常熟市	常熟美年大健康体检分院 	常熟市黄河路22号汇丰时代广场  XXXX
江苏 	苏州市	虎丘区	苏州美年大健康狮山体检分院 	虎丘区狮山路35号1幢101室  XXXX
江苏 	苏州市	昆山市	昆山美年大健康分院 	昆山市柏庐南路中茵广场58号  XXXX
江苏 	苏州市	吴中区	苏州美年大健康东环店 	吴中区东环路1500号现代创展大厦5楼（大润发旁）   XXXX
江苏 	苏州市	吴中区	苏州美年大健康长江路分院 	吴中区长江路9号长江壹号广场1栋3层  XXXX
江苏 	苏州市	相城区	苏州美年大健康相城店 	相城区相城大道1539号德诚嘉元广场1-2层  XXXX
江苏 	泰州市	海陵区	泰州美年大健康体检分院 	海陵区南通路298号（斜桥加油站东侧）   XXXX
江苏 	无锡市	滨湖区	无锡爱康国宾新吴茂业体检分院 	滨湖区长江路1-101号茂业百货F层  XXXX
江苏 	无锡市	滨湖区	无锡美年大健康建筑路分院 	滨湖区建筑路400号大统华旁  XXXX
江苏 	无锡市	江阴市	无锡爱康国宾江阴临港体检分院 	临港新城（经济开发区） 中央商务区CDB苏港路99号（国检大楼1-2楼）   XXXX
江苏 	镇江市	京口区	镇江爱康国宾长江路文广体检分院 	京口区长江路33号广电大厦裙楼3层  XXXX
江西 	南昌市	东湖区	南昌美年大健康倍康体检分院 	东湖区起凤路58号（香江家具城旁）   XXXX
江西 	南昌市	东湖区	南昌美年大健康泰安分院 	东湖区红谷滩新区翠林路68号（市政府南门斜对面）   XXXX
江西 	南昌市	青山湖区	南昌美年大健康京东分院 	青山湖区京东大道777号东城宾馆1层(世季风情一期对面)  XXXX
江西 	南昌市	西湖区	南昌美年大健康美康体检分院 	西湖区站前路105号江西供销物流服务中心大楼5-7楼  XXXX
江西 	上饶市	信州区	上饶美年大健康体检分院 	凤凰东大道188号恒基中心广场二楼  XXXX
江西 	新余市	渝水区	新余美年大健康体检分院 	城北仙来东大道与劳动北路交汇处辰光大厦  XXXX
辽宁 	鞍山市	铁西区	鞍山美年大健康体检分院 	铁西区千山西路千华悦城小区一至四层（鞍钢南门对面美年大健康，近铁西六道街）   XXXX
辽宁 	朝阳市	双塔区	朝阳美年大健康体检分院 	双塔区珠江路三段40号  XXXX
辽宁 	丹东市	元宝区	丹东美年大健康体检分院 	元宝区平安街21号（东升御景苑）   XXXX
辽宁 	阜新市	海州区	阜新美年大健康体检分院 	矿工大街39号  XXXX
辽宁 	锦州市	太和区	锦州美年大健康体检分院 	太和区凌西大街香榭丽花园4号  XXXX
辽宁 	辽阳市	宏伟区	辽阳江北美年大健康体检分院 	南环街23151号（香港花园斜对面）  十字路口东南角  XXXX
辽宁 	沈阳市	和平区	沈阳爱康国宾太原街分院 	和平区太原南街236号  XXXX
辽宁 	沈阳市	和平区	沈阳美年大健康和平分院 	和平区胜利大街南七马路1号  XXXX
辽宁 	沈阳市	皇姑区	沈阳美年大健康皇姑分院 	皇姑区黄河南大街32号（居然之家旁）   XXXX
辽宁 	沈阳市	浑南区	沈阳美年大健康浑南分院 	浑南新区沈营路9-2号  XXXX
辽宁 	沈阳市	沈河区	沈阳爱康国宾青年大街分院 	沈河区青年大街166号  XXXX
辽宁 	营口市	西市区	营口美年大健康体检分院 	西市区金牛山大街西30号(万都酒店西侧)  XXXX
内蒙古	包头市	昆都仑区 	包头美年大健康体检分院	昆都仑区钢铁大街35号地久商务大厦  XXXX
内蒙古	鄂尔多斯市	伊金霍洛旗 	鄂尔多斯美年大健康分院	伊金霍洛旗工贸大厦C座底商  XXXX
内蒙古	呼和浩特市	回民区 	呼和浩特美年大健康东汇体检分院	如意开发区如意和大街万铭总部基地3号楼5楼（东岸国际东边十字口）   XXXX
内蒙古	通辽市	科尔沁区 	通辽美年大健康体检分院	经济开发区凤凰山大街与常胜路交汇处北50米（市政府后院非常大饭堂西侧）   XXXX
宁夏 	银川市	兴庆区	银川美年大健康体检分院 	兴庆区穆商南路99号（茶城旁边，麦德龙超市对面）   XXXX
山东 	菏泽市	牡丹区	菏泽美年大健康体检分院 	牡丹区人民路龙燕阳光城商务楼3.4层  XXXX
山东 	济南市	天桥区	济南美年大健康明湖分院 	天桥区北坦大街5号（明湖西路巴黎花园西邻）   XXXX
山东 	济宁市	任城区	济宁美年大健康体检分院 	任城区洸河西路开泰花园南门沿街商务楼3-301(近金塔路)  XXXX
山东 	临沂市	兰山区	临沂美年大健康体检分院（一店）  	兰山区金一路与临西五路交汇处西北角（金阳花园店）   XXXX
山东 	临沂市	兰山区	临沂美年大健康万兴都分院（二店）  	兰山区涑河南街三号万兴都二号楼三楼（沂蒙路与涑河南街交汇处东150米路北）   XXXX
山东 	青岛市	市南区	青岛美年大健康香港中路店 	市南区香港中路18号二层福泰广场C座二楼  XXXX
山东 	泰安市	泰山区	泰安美年大健康体检分院 	泰安区市政广场西御碑楼路67号（近国华经典社区）   XXXX
山东 	威海市	环翠区	威海美年大健康体检分院 	环翠区远遥墩路206号  XXXX
山东 	潍坊市	奎文区	潍坊爱康国宾东方路体检分院 	奎文区卧龙东街与东方路交汇处  XXXX
山东 	潍坊市	奎文区	潍坊爱康国宾新华路分院 	奎文区民生东街88号（原凯远大厦）   XXXX
山东 	潍坊市	奎文区	潍坊美年大健康体检分院 	奎文区潍州路696号  XXXX
山东 	烟台市	福山区	烟台爱康国宾开发区分院 	福山区开发区长江路97号国家羽毛球训练基地  XXXX
山东 	烟台市	福山区	烟台美年大健康开发区分院 	福山区开发区金沙江路163号  XXXX
山东 	烟台市	莱山区	烟台爱康国宾莱山区体检分院 	莱山区港城东大街588号第三城副楼（广播电视台南）   XXXX
山东 	烟台市	芝罘区	烟台爱康国宾芝罘区体检分院 	解放路156号世贸广场3楼  XXXX
山东 	烟台市	芝罘区	烟台美年大健康福田分院 	芝罘区大马路128号  XXXX
山东 	枣庄市	滕州市	滕州美年大健康体检分院 	北辛街道小清河北岸（农行西邻）   XXXX
山西 	晋城市	城区	晋城美年大健康中原街分院 	城区中原东街115号  XXXX
山西 	吕梁市	离石区	吕梁美年大健康体检分院 	离石区滨河北西路1号  XXXX
山西 	太原市	万柏林区	太原美年大健康漪汾分院 	万柏林区漪汾街26号麦特摩尔大厦五层（魔音时尚主题KTV隔壁）   XXXX
山西 	太原市	小店区	太原美年大健康长风分院 	小店区长风街与建设南路交叉口东面向东200米东风佳苑一层  XXXX
山西 	太原市	杏花岭区	太原美年大健康万达广场分院 	杏花岭区解放路175号万达广场写字楼A座7层  XXXX
山西 	太原市	迎泽区	太原美年大健康迎泽分院 	迎泽区双塔寺街124号2层1号山西报业集团东100米  XXXX
山西 	运城市	盐湖区	运城美年大健康体检分院 	盐湖区禹都大道218号(南风广场北面往西100米)  XXXX
陕西 	汉中市	汉台区	汉中美年大健康体检分院 	汉台区南团结街滨江佳园  XXXX
陕西 	西安市	碑林区	西安普惠劳动南路体检分院 	碑林区劳动南路64号美化大厦5-7楼  XXXX
陕西 	西安市	碑林区	西安普惠曲江体检分院 	碑林区雁塔南路曲江文化创意大厦5层  XXXX
陕西 	西安市	碑林区	西安普惠太白体检分院 	碑林区太白北路6号荷丰润国际公寓2-3层  XXXX
陕西 	西安市	碑林区	西安普惠兴庆南路体检分院 	碑林区兴庆南路10号西安交大新闻出版社3楼（交大东南门）   XXXX
陕西 	西安市	未央区	西安爱康国宾经开分院 	未央大道199号美豪酒店3层  XXXX
陕西 	西安市	未央区	西安美年大健康未央体检分院 	未央区未央路164号双威迎宾广场  XXXX
陕西 	西安市	未央区	西安普惠经开体检分院 	未央区未央大道132号经发国际大厦3层  XXXX
陕西 	西安市	雁塔区	西安爱康国宾曲江分院 	雁塔区慈恩西路南段曲江六号东门1-3层(大唐不夜城旁)  XXXX
陕西 	西安市	雁塔区	西安普惠高新体检分院 	雁塔区高新四路1号高科广场A座3层  XXXX
陕西 	西安市	雁塔区	西安熙康体检分院 	唐延路中段37乙号洛克大厦三楼  XXXX
陕西 	咸阳市	秦都区	咸阳普惠体检分院 	秦都区渭阳西路1号1幢3层  XXXX
上海 	上海市	黄浦区	上海爱康国宾外滩延安东路体检分院 	黄浦区江西南路29号2层（近金陵东路）   XXXX
上海 	上海市	黄浦区	上海爱康国宾西藏南路老西门分院 	黄浦区西藏南路768号安基大厦5层  XXXX
上海 	上海市	黄浦区	上海美年大健康黄浦分院 	黄浦区延安东路175号旺角广场4F  XXXX
上海 	上海市	静安区	上海爱康国宾曹家渡体检分院 	静安区康定路1437号鑫康苑2层  XXXX
上海 	上海市	静安区	上海美年大健康静安分院 	静安区西康路608号华通大厦1-2层  XXXX
上海 	上海市	静安区	上海美年大健康苏河一号分院 	闸北区恒丰路638号苏河一号3层  XXXX
上海 	上海市	闵行区	上海美年大健康宜山分院 	闵行区宜山路1728号燎申宜山大厦1-2层  XXXX
上海 	上海市	浦东新区	上海爱康国宾陆家嘴体检分院 	浦东新区商城路1900号金桃大厦1-2层(源深体育场北)  XXXX
上海 	上海市	浦东新区	上海爱康国宾浦东八佰伴分院 	浦东新区张杨路560号中融恒瑞国际大厦西楼六层（西南门）   XXXX
上海 	上海市	浦东新区	上海美年大健康浦东齐鲁分院 	浦东新区东方路838号齐鲁大厦3层  XXXX
上海 	上海市	浦东新区	上海美年大健康浦东一分院 	浦东新区崂山路523号（近张杨路）   XXXX
上海 	上海市	浦东新区	上海熙康体检张江分院 	浦东新区张江高科技园区碧波路250号3号楼  XXXX
上海 	上海市	普陀区	上海爱康国宾中环一品分院 	普陀区真光路1288号百联中环购物广场4层（观8电梯上）   XXXX
上海 	上海市	普陀区	上海美年大健康赢华分院 	普陀区光复西路2899弄赢华国际广场7座B1层（红纺文化）   XXXX
上海 	上海市	徐汇区	上海美年大健康小木桥分院 	徐汇区小木桥路251号天亿大厦1-3层  XXXX
上海 	上海市	杨浦区	上海爱康国宾五角场分院 	杨浦区国宾路36号万达广场B座5层（国宾路入口）   XXXX
上海 	上海市	杨浦区	上海美年大健康五角场分院 	杨浦区淞沪路388号创智天地7号楼5层  XXXX
上海 	上海市	长宁区	上海爱康国宾中山公园南延安西路分院 	长宁区定西路1018号宁电投大厦3层（近昭化路）   XXXX
上海 	上海市	长宁区	上海美年大健康天山分院 	长宁区天山路8号1-2层(近哈密路)  XXXX
四川 	成都市	金牛区	成都美年大健康金牛分院 	金牛区金沙路十五号二楼  XXXX
四川 	成都市	金牛区	成都美年大健康星辉分院 	金牛区星辉西路12号1-3层  XXXX
四川 	成都市	锦江区	成都爱康国宾安生美体检分院（高新分院）  	高新区天韵路高新国际广场D座3层  XXXX
四川 	成都市	锦江区	成都爱康国宾城南分院 	高新区天府大道中段天府三街新希望国际C座3楼  XXXX
四川 	成都市	锦江区	成都美年大健康维康分院 	锦江区牛沙南路3号1层附27号科源种子大厦2-3层  XXXX
四川 	成都市	青羊区	成都爱康国宾红照壁航天科技分院 	青羊区人民南路一段新光华街7号航天科技大厦5层  XXXX
四川 	成都市	青羊区	成都爱康国宾骡马市体检分院 	青羊区青龙大街18号罗马国际大厦4楼  XXXX
四川 	成都市	武侯区	成都爱康国宾外双楠分院 	武侯区二环路西一段置信路1号5层（双楠伊藤旁苏宁电器五楼）   XXXX
四川 	成都市	武侯区	成都美年大健康高新一院 	武侯区府城大道西段399号天府新谷1栋1楼(市一医院斜对面)  XXXX
四川 	成都市	武侯区	成都美年大健康凯尔分院 	二环路南四段51号莱蒙都会5楼  XXXX
四川 	成都市	武侯区	成都美年大健康武侯分院 	武侯区浆洗街27号天亿大厦1-2层  XXXX
四川 	成都市	武侯区	成都普惠武侯体检分院 	武侯区人民南路四段11号大陆国际3—4层  XXXX
四川 	成都市	武侯区	成都熙康体检分院 	武侯区荣华北路299号都城雅颂居8栋5-6楼  XXXX
四川 	德阳市	旌阳区	德阳美年大健康体检分院 	旌阳区庐山南路一段11号  XXXX
四川 	广元市	利州区	广元美年大健康体检分院 	利州东路三段芸香社区18号  XXXX
四川 	乐山市	市中区	乐山美年大健康体检分院 	市中区柏杨西路6号（中心站对面）   XXXX
四川 	绵阳市	涪城区	绵阳爱康国宾高新火炬广场体检分院 	涪城区火炬北路附21号（交警四大队对面）   XXXX
四川 	绵阳市	涪城区	绵阳美年大健康体检分院 	涪城区长虹大道中段51号(市图书馆旁)  XXXX
四川 	遂宁市	船山区	遂宁美年大健康河东体检分院 	河东新区德水北路56号正黄金域国际9栋2单元4层  XXXX
四川 	自贡市	大安区	自贡美年大健康体检分院 	大安区马吃水路154号  XXXX
天津 	天津市	滨海新区	天津美年大健康滨海分院 	滨海开发区捷达路26号1-2层（原大地中心）   XXXX
天津 	天津市	和平区	天津爱康国宾南京路吉利大厦体检分院 	和平区南京路209号吉利大厦9层  XXXX
天津 	天津市	河东区	天津爱康国宾六纬路东润名邸体检分院 	河东区六纬路201号东润大厦4层  XXXX
天津 	天津市	河东区	天津美年大健康大光明桥天星分院 	河东区十一经路81号天星河畔广场6层  XXXX
天津 	天津市	河西区	天津爱康国宾围堤道峰汇广场分院 	河西区围堤道103号峰汇广场B座5层（近友谊路）   XXXX
天津 	天津市	南开区	天津美年大健康八里台总院 	南开区卫津南路109号京燕大厦A座5层（新文化广场）   XXXX
天津 	天津市	南开区	天津美年大健康鼓楼分院 	南开区鼓楼商业街东街旅游超市内  XXXX
新疆 	哈密地区	哈密市	新疆美年大健康哈密分院 	哈密市建国北路23号(地区交通局旁)  XXXX
新疆 	乌鲁木齐市	新市区	乌鲁木齐美年大健康新市区分院 	太原南路610号(铁路局党校旁）   XXXX
云南 	大理白族自治州	大理市	大理美年大健康体检分院 	经济开发区苍山东路539号大理国际会展中心(泛亚汽车城) 二楼  XXXX
云南 	昆明市	盘龙区	昆明美年大健康北京路分院 	盘龙区北京路SOHO俊园11至12栋(近奥斯迪购物中心)  XXXX
浙江 	杭州市	滨江区	杭州爱康国宾滨江分院 	滨江区江南大道588号恒鑫大厦裙楼2层  XXXX
浙江 	杭州市	滨江区	杭州美年大健康滨江区分院 	滨江区滨盛路1508号海亮大厦3层  XXXX
浙江 	杭州市	西湖区	杭州爱康国宾西溪体检分院 	西湖区文二西路718号西溪创意大厦1层,2层  XXXX
浙江 	杭州市	西湖区	杭州美年大健康西溪分院 	西湖区文一西路830号第六空间大厦4层（近花蒋路）   XXXX
浙江 	杭州市	下城区	杭州爱康国宾文晖体检分院 	下城区文晖路108号浙江物资出版大厦2层  XXXX
浙江 	杭州市	下城区	杭州美年大健康延安路分院 	下城区延安路408号浙江二轻大厦三楼  XXXX
浙江 	杭州市	萧山区	杭州美年大健康萧山分院 	萧山区金城路438号东南科技研发中心4层  XXXX
浙江 	嘉兴市	南湖区	嘉兴美年大健康体检分院 	南湖区云东路与九曲路交叉路口良友国际大厦2-3楼  XXXX
浙江 	金华市	义乌市	义乌美年大健康体检分院 	义乌市稠江街道杨村路335号  XXXX
浙江 	宁波市	海曙区	宁波美年大健康体检分院 	海曙区民通街108号（恒茂商业广场1号楼1—2层） （花鸟市场对面）   XXXX
浙江 	宁波市	江东区	宁波熙康体检分院 	江东区中山东路1999号1号楼  XXXX
浙江 	衢州市	柯城区	衢州美年大健康体检分院 	柯城区白云中大道39号中央商务广场3幢（新城吾悦广场旁）   XXXX
浙江 	台州市	温岭市	温岭美年大健康体检分院 	温岭市城西街道中华北路588号  XXXX
重庆 	重庆市	江北区	重庆美年大健康江北分院 	江北区海尔路6号9栋  XXXX
重庆 	重庆市	渝北区	重庆普惠体检分院 	渝北区黄泥磅紫荆路13号佳华世纪城F区1幢2层 XXXX`

var reg = /(.{2,3})\s+(.+[市州区县])\s+(.+[市区旗道镇])\s+(.+[院部店](（.+）)?)\s+(.+)\s+?XXXX/g
var result = data.replace(reg, `$1  $2  $3 [{"name":"$4","address":"$6"}]`);

fs.writeFileSync('output.txt', result, 'utf-8');