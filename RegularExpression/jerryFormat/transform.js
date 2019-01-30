const fs = require('fs');
var onePaperObj = {
	risk:[],
	ensure:[],
	plan:[],
	product:[]
};


const risk = `BB
TT1、疾病风险TT
II（1）大病风险：花费较高的大病，往往医保报销少，治疗时间长，对家庭冲击最大。重疾险和百万医疗险，重疾确诊即付+大病出院报销；百万医疗险报销住院费用，重疾赔付的保额可以作为收入损失和康复费用，转移您的大病风险。II
II（2）小病风险：小病住院，检查、手术、药物，花费也不少。住院宝医疗险，保费低、百万医疗险的好搭档，转移您的小病风险。II
BB

BB
TT2、身故风险TT
II对于家庭收入主要来源来说，承担家庭房贷、车贷等债务，同时有赡养父母、抚养子女的义务，如果不幸离世，对家庭的影响是毁灭性的。<br/>购买定期寿险，以较低的保费，可以撬动较高的保额，保障家庭的稳固。II
BB

BB
TT3、意外风险TT
II意外的发生是最不能预料的，猫抓狗咬、交通意外、跌打扭伤等等。<br/>意外险，可以解决意外身故、意外残疾、意外医疗带来的经济损失。II
BB

BB
TT4、养老风险TT
II长寿时代来临，养老金需求越来越高，避免出险因老致困的窘况。<br/>年金险是唯一可以跟年龄挂钩的产品，越长寿越受益，安全性高、稳定性高，是解决养老风险的最重要的方式之一。II
BB
`;


const ensure = `EE重疾险XX30w+XX治疗康复-医保报销+收入补偿EE
EE百万医疗XX100w+XX转移大病风险EE
EE住院宝XX1w+XX百万医疗的黄金搭档EE
EE定期寿险XX100w+XX房贷+车贷+子女教育+赡养父母EE
EE意外险XX30w+XX身故/伤残、医疗、住院津贴EE
EE年金险XX退休领取额占工资30%XX保费支出不影响当下生活质量EE`;

const plan = `BB
TT1、复星联合康乐无忧重大疾病保险-增强版TT
II重疾保障：80种疾病II
II轻症保障：35种疾病，不分组、无间隔期，3次赔付，每次20%保额II
II轻症豁免保费：罹患轻症，免交后期保险费，保障继续有效II
II身故责任：100%保额II
II可选：投保人豁免II
II投保示例：保障终身、30年交、保额40万<br/>30岁男性：6475；30岁女性5588元II
BB
BB
TT2、中信保诚帧爱优选定期寿险TT
II身故/全残：100万II
II投保示例：保至60岁、30年交<br/>30岁男性：2010；30岁女性1020元II
BB
BB
TT3、泰医保3号百万医疗保险TT
一般医疗保险金：300万
II恶性肿瘤医疗保险金：300万II
II年度免赔额：1万（恶性肿瘤无免赔额）II
II可选：特需医疗责任，6种特定疾病扩展特需医疗部、国际部II
II投保示例：30岁255元II
BB
BB
TT4、泰康住院保2018必备版TT
II意外身故/伤残：10万II
II意外医疗：1万II
II疾病住院医疗：2万II
II投保示例：30岁249元II
BB
BB
TT5、上海人寿大金刚TT
II意外身故/伤残：50万II
II意外医疗：5万II
II意外住院津贴：150元/天II
II投保示例：30岁288元II
BB
BB
TT累计保费：TT
II30岁男性：9277II
II30岁女性：7400II
BB`

const product = `BB
TT1、复星联合康乐无忧重大疾病保险-增强版TT
II可智能核保；80种重疾、35种轻症额外3次、不分组（高发轻症涵盖全）；身故赔付保额；投被保人双豁免；交费灵活选择多；带身故重疾险首选。II
BB
BB
TT2、中信保诚帧爱优选定期寿险TT
II18-50岁可投保，非吸烟人群价格优势大，交费灵活、保障期间选择多，支持在线指定受益人，免责条款少，对冲房贷、车贷责任。II
BB
BB
TT3、泰医保3号百万医疗保险TT
II0-65岁可投保，百万医疗网红产品，最高600万报销额度，不限疾病类型、不限治疗方式，自费药、进口药均可报销，恶性肿瘤0免赔，可选择附加扩展特需医疗、更优医疗环境。II
BB
BB
TT4、泰康住院保2018必备版TT
II0-65岁可投保，意外、疾病双保障，意外保障包含门诊、住院，疾病住院不限定疾病，满足意外和医疗的保障需求。II
BB
BB
TT5、上海人寿大金刚TT
II18-59岁可投保，1-4类职业均可投保，可享受理赔免原件邮寄服务，保障责任全、极具性价比。II
BB`


var riskBlockReg = /BB([^B]+)BB/g;
var riskTitleReg = /TT\d、(.+)TT/g;
var riskContentReg = /II(?:（\d）)?(.+)II/g
var blockOut = ''

while(blockOut = riskBlockReg.exec(risk)){
	var _risk = {title:'', desc:[]};
	var titleOut = '';
	while(titleOut = riskTitleReg.exec(blockOut[1])){
		_risk.title = titleOut[1];
	}
	var contentOut = '';
	while(contentOut = riskContentReg.exec(blockOut[1])){
		_risk.desc.push(contentOut[1])
	}
	onePaperObj.risk.push(_risk);
	console.log('next risk');
}



var ensureReg = /EE(.+)XX(.+)XX(.+)EE/g;
var ensureOut = ''
while(ensureOut = ensureReg.exec(ensure)){
	var _ensure = {};
	_ensure.type = ensureOut[1];
	_ensure.advise = ensureOut[2];
	_ensure.remark = ensureOut[3];
	onePaperObj.ensure.push(_ensure);
}

var planBlockReg = /BB([^B]+)BB/g;
var planTitleReg = /TT(?:\d、)?(.+)TT/g;
var planContentReg = /II(.+)：(.+)II/g
var blockOut = ''
while(blockOut = planBlockReg.exec(plan)){
	var _plan = {needNum:true, desc:[]};
	
	var titleOut = '';
	while(titleOut = planTitleReg.exec(blockOut[1])){
		// 注意：即使是知道只能匹配到1个，也要用while
		// 使RegExp.exec的指针走完全程，下一次匹配才可以从头开始
		// 如果只是用单语句planTitleReg.exec(blockOut[1])，则只能输出第1、3、5……次的匹配结果
		
		_plan.title = titleOut[1];

	}
	var contentOut = '';
	while(contentOut = planContentReg.exec(blockOut[1])){
		var _desc = {};
		_desc.label = contentOut[1];
		_desc.value = contentOut[2];
		_plan.desc.push(_desc);
	}

	onePaperObj.plan.push(_plan);
	console.log('next plan');
}



var productBlockReg = /BB([^B]+)BB/g;
var productTitleReg = /TT\d、(.+)TT/g;
var productContentReg = /II(.+)II/g
var blockOut = ''

while(blockOut = productBlockReg.exec(product)){
	var _product = {pro_num:335};
	var titleOut = '';
	while(titleOut = productTitleReg.exec(blockOut[1])){
		_product.title = titleOut[1];
	}
	var contentOut = '';
	while(contentOut = productContentReg.exec(blockOut[1])){
		_product.desc = contentOut[1];
	}
	console.log('next product');
	onePaperObj.product.push(_product);
}

console.log(onePaperObj);

fs.writeFileSync('成人3万.json', JSON.stringify(onePaperObj), 'utf-8');