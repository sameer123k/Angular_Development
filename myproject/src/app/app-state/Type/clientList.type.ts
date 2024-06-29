export interface getClient {
    userId?: Number;
    roleID?: Number;
    dealerID?: Number;
    userFullName?:String;
    email?:String;
    phoneNumber?:String;
    processType?:String;
    dealerParent?:String;   
}



  
export interface getUsernameToUserInformationBody {
    userName?:String
}
