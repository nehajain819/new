angular.
  module('supdoc').
  component('useregistration', {
    template:
    // '<ul>' +
    // '<li ng-repeat="user in $ctrl.users">' +
    // '<span>{{user.name}}</span>' +
    // '<p>{{user.snippet}}</p>' +
    // '</li>' +
    // '</ul>' +
'<style>'+
'input.ng-invalid {'+
    'background-color:pink;'+
'}'+
'input.ng-valid {'+
    'background-color:lightgreen;'+
'}'+
'.formclass{'+
'background-color: yellow;'+
// 'margin-left:40%;'+
'margin-top: -2%;'+
'width: 100%;'+
'height: 520px; padding-left:33%; padding-top:2%;'+
'}'+
'.form-group{'+
'margin: 30px;'+

'}'+
'.reg{'+
    'text-align: center;'+
    'text-decoration: underline;'+
    'padding: 10px;'+
'}'+
'.btn-default:hover {'+
    'background-color: #1f2532;'+
    'color: #ffe13e;'+
    'border-color: #1f2532;'+
'}'+
'.btn-default{'+
    'margin-left:314px;'+
    'font: bold 18px Raleway Bold, sans-serif;'+
    'padding: 21px 63px;'+
    'margin-top: -13px;'+
'}'+
'h1{height:200px; width:100%; color:white; background-color: gray; margin-top: 50px; text-align: center; padding: 20px; padding-top: 50px;}'+
/*.bodyclass{
    background-color: grey;
}*/
'.form-control{font-family: "Raleway", sans-serif;'+
    'font-size: 18px;'+
    'color: #67687b;'+
    'background-color: #fbf8f1;'+
    'padding: 18px 33px;'+
    'width: 50%;'+
    'border: 1px solid transparent; height:50px;'+
    'outline: 0;}'+
'</style>'+

'<h1> USER REGISTRATION </h1>'+

    '<form ng-app="" name="myForm" class="formclass" >' +

    // '<p class="reg">User Registration</p>' +
    '<div class="form-group">' +
    // 'User Name:</br>' +
    '<input type="text" name="User" placeholder="Enter User Name"  class="form-control" ng-model="UserName" required>' +
'</div>'+
    '<div class="form-group">'+
      // 'Email_Id:</br>'+ 
    '<input type="email" placeholder="Enter Email" name="Email"  class="form-control" ng-model="Email_Id" required>'+
      '<span ng-show="myForm.Email.$error.email">Not a valid e-mail address</span>'+
'</div>'+
    '<div class="form-group">'+
      '<input type="password" placeholder="Enter Password"  class="form-control" ng-model="Password" required>'+
 '</div>'+
    '<div class="form-group">'+
      '<input type="password" placeholder="Re-Enter Password"  class="form-control" ng-model="CPassword" required>'+
        '</div>'+
    '<div class="form-group">'+
      '<h4>Role:</h4><select ng-model="Role" placeholder="Select Role" required style="width:500px; padding: 3px;">'+
      '<option value="">'+
        '<option value="amdin">Admin'+
                '<option value="TeamMember">Team Member'+
               '</select>'+
               '</div>'+
        '<div class="form-group">'+
          '<button type="submit" class="btn btn-default">Submit</button>'+
        '</div>'+
    '</form>',



      controller: function userController() {
        this.users = [
          {
            name:'' ,
            snippet: 'Fast just got faster with Nexus S.'
          }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
          }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
          }
        ];
      }
  });