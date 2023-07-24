//Quy ước đặt tên biến trong JS

//Các tên biến trong JS phân biệt chữ hoa chữ thường
//Biến JS phải có ý nghĩa mô tả
//Các style đặt tên biến:camelCase ,PascalCase,snake_case,kebab-case
var firstName = "Phuc";

//Quy ước đặt tên trong JS với boolean:
//Tiền tố như is , are hoặc has giúp mọi nhà phát triển JavaScript phân biệt một boolean với một biến khác chỉ bằng cách nhìn vào nó:
var isVisible = true;
var hasEncryption = true;

//Quy ước đặt tên trong JS với function:
//Các hàm JavaScript cũng được viết bằng camelCase. Ngoài ra, cách tốt nhất là thực sự cho biết hàm đang làm gì bằng cách đặt tên hàm là một động từ làm tiền tố.Tiền tố của động từ này có thể là bất cứ thứ gì (ví dụ: get , fetch , push , apply , calculate , compute , post ).
function getName(firstName, lastName) {
  return ` ${firstName} ${lastName} `;
}

//Quy ước đặt tên trong JS với class:
//Một lớp JavaScript được khai báo bằng PascalCase
class SoftwareDeveloper {
  constructor(FirstName, LastName) {
    this.FirstName = FirstName;
    this.LastName = LastName;
  }
}

var me = new SoftwareDeveloper("Robin", "Wieruch");

//Quy ước đặt trên trong JS với Component:
//Các Component JavaScript cũng được viết bằng PascalCase
function UserProfile(user) {
  return (
    <div>
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
    </div>
  );
}

//Quy ước đặt trên trong JS với Method:
//Các Method JavaScript cũng được viết bằng camelCase

class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

var me = new SoftwareDeveloper("Robin", "Wieruch");

console.log(me.getName());

//Quy ước đặt trên trong JS với private:
//Các private JavaScript cũng được viết bằng camelCase nhưng có dấu _ ở phía trước

class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = _getName(firstName, lastName);
  }

  _getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}

var me = new SoftwareDeveloper("Robin", "Wieruch");

// good
var name = me.name;
console.log(name);
//bad
name = me._getName(me.firstName, me.lastName);
console.log(name);

//Quy ước đặt trên trong JS với constant:
//Các constant JavaScript được viết bằng chữ in hoa
var SECONDS = 60;
var MINUTES = 60;
var HOURS = 24;
//tên biến có nhiều hơn 1 từ thì _ ở dưới
var DAYS_UNTIL_TOMORROW = 1;
