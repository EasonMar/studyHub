/**
 * 节点修改API都具有下面这几个特点：
 * 1. 不管是新增还是替换节点,如果其原本就在页面上,那么原来位置的节点将被移除；
 * 2. 修改之后节点本身绑定的事件不会消失；
 */


/**
 * appendChild - 添加子节点
 * 语法：parent.appendChild(child)
 * 它会将child追加到parent的子节点的最后面。
 * 另外,如果被添加的节点是一个页面中存在的节点,则执行后这个节点将会添加到新的位置,其原本所在的位置将移除该节点,
 * 也就是说不会同时存在两个该节点在页面上,且其事件会保留。
 */


/**
 * insertBefore - 将某个节点插入到另外一个节点的前面
 * 语法：parentNode.insertBefore(newNode, refNode)
 * 这个API个人觉得设置的非常不合理,因为插入节点只需要知道newNode和refNode就可以了,parentNode是多余的
 * 关于第二个参数：
 * refNode是必传的,如果不传该参数会报错；
 * 如果refNode是undefined或null,则insertBefore会将节点添加到末尾；
 */

/**
 * removeChild - 
 */

/**
 * replaceChild - 
 */