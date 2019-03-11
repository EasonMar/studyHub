// 策略模式实现 - 商场促销项目
abstract class CashSuper
{
    public abstract double acceptCash(double money);
}

class CashNormal : CashSuper
{
    public override double acceptCash(double money)
    {
        return money;
    } 
}

class CashReturn : CashSuper
{
    private double moneyCondition = 0.0d;
    private double moneyReturn = 0.0d;
    
    // 构造函数
    public CashReturn(string moneyCondition,string moneyReturn)
    {
        this.moneyCondition = double.Parse(moneyCondition);
        this.moneyReturn = double.Parse(moneyReturn);
    }

    public override double acceptCash(double money)
    {
        double result = money;
        if (money >= moneyCondition)
            result=money- Math.Floor(money / moneyCondition) * moneyReturn;
            
        return result;
    } 
}

class CashRebate : CashSuper
{
    private double moneyRebate = 1d;

    // 这是构造函数
    public CashRebate(string moneyRebate)
    {
        this.moneyRebate = double.Parse(moneyRebate);
    }

    public override double acceptCash(double money)
    {
        return money * moneyRebate;
    } 
}

//收费策略Context
class CashContext
{
    //声明一个现金收费父类对象
    private CashSuper cs;

    //设置策略行为，参数为具体的现金收费子类（正常，打折或返利）
    //这个是构造函数！用来接收具体策略的！
    public CashContext(CashSuper csuper)
    {
        this.cs = csuper;
    }

    //得到现金促销计算结果（利用了多态机制，不同的策略行为导致不同的结果）
    public double GetResult(double money)
    {
        return cs.acceptCash(money);
    }
}

// 客户端代码
double total = 0.0d;//用于总计
private void btnOk_Click(object sender, EventArgs e)
{
    CashContext cc = null;
    switch (cbxType.SelectedItem.ToString())
    {
        case "正常收费":
            cc = new CashContext(new CashNormal());
            break;
        case "满300返100":
            cc = new CashContext(new CashReturn("300", "100"));
            break;
        case "打8折":
            cc = new CashContext(new CashRebate("0.8"));
            break;
    }

    double totalPrices = 0d;
    totalPrices = cc.GetResult(Convert.ToDouble(txtPrice.Text) * Convert.ToDouble(txtNum.Text));
    total = total + totalPrices;
    lbxList.Items.Add("单价：" + txtPrice.Text + " 数量：" + txtNum.Text + " " + cbxType.SelectedItem + " 合计：" + totalPrices.ToString());
    lblResult.Text = total.ToString();
}