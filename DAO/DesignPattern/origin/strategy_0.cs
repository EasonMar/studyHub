// 简单工厂模式实现 - 商场促销项目

// 现金收取父类 - 抽象收费类
abstract class CashSuper
{
    //抽象方法：收取现金，参数为原价，返回为当前价
    public abstract double acceptCash(double money);
}

//正常收费，继承CashSuper
class CashNormal : CashSuper
{
    public override double acceptCash(double money)
    {
        return money;
    }
}
//打折收费，继承CashSuper
class CashRebate : CashSuper
{
    private double moneyRebate = 1d;
    //初始化时，必需要输入折扣率,如八折，就是0.8
    public CashRebate(string moneyRebate)
    {
        this.moneyRebate = double.Parse(moneyRebate);
    }
    public override double acceptCash(double money)
    {
        return money * moneyRebate;
    }
}
//返利收费，继承CashSuper
class CashReturn : CashSuper
{
    private double moneyCondition = 0.0d;
    private double moneyReturn = 0.0d;
    //初始化时必须要输入返利条件和返利值，比如满300返100，则moneyCondition为300，moneyReturn为100
    public CashReturn(string moneyCondition, string moneyReturn)
    {
        this.moneyCondition = double.Parse(moneyCondition);
        this.moneyReturn = double.Parse(moneyReturn);
    }

    public override double acceptCash(double money)
    {
        double result = money;
        //若大于返利条件，则需要减去返利值
        if (money >= moneyCondition)
            result = money - Math.Floor(money / moneyCondition) * moneyReturn;

        return result;
    }
}

// 工厂
class CashFactory
{
    // 根据条件返回相应的对象
    public static CashSuper createCashAccept(string type)
    {
        CashSuper cs = null;
        switch (type)
        {
            case "正常收费":
                cs = new CashNormal();
                break;
            case "满300返100":
                CashReturn cr1 = new CashReturn("300", "100");
                cs = cr1;
                break;
            case "打8折":
                CashRebate cr2 = new CashRebate("0.8");
                cs = cr2;
                break;
        }
        return cs;
    }
}

// 客户端代码
double total = 0.0d;
private void btnOk_Click(object sender, EventArgs e)
{
    // 利用简单工厂模式根据下拉选择框，生成相应的对象
    CashSuper csuper = CashFactory.createCashAccept(cbxType.SelectedItem.ToString());
    double totalPrices = 0d;
    // 通过多态，可以得到收取费用的结果
    totalPrices = csuper.acceptCash(Convert.ToDouble(txtPrice.Text) * Convert.ToDouble(txtNum.Text));
    total = total + totalPrices;
    lbxList.Items.Add("单价：" + txtPrice.Text + " 数量：" + txtNum.Text + " "
        + cbxType.SelectedItem + " 合计：" + totalPrices.ToString());
    lblResult.Text = total.ToString();
}