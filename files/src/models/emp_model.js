const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({ 
      
   user_id: {
    type: 'string'
   },
   firstname: {
       type: 'string'
   },
   lastname: {
    type: 'string'
   },
   title: { 
    type: 'string'
   },
   Qualification: {
    type: 'string'

   },
   profile_photo: {
    type: 'string'
   },
   year_of_passing: {
     type: 'string'
   },
   address : {
    type: 'string',
   },
   country : {
    type: 'string',
  },
 state : {
    type: 'string',
 },
 designations: {
 type: 'string',
 },
 city : {
    type: 'string',     
},
institution: {
    type: 'string',
},
email :{
    type: 'string',
},
period : {
    type: 'string',
  },
  organization : {
    type: 'string',
  },
  designation : {
    type: 'string',
  },
  responsiveibiliies : {
    type: 'string',
  },
  DOB : {
    type: 'string',
  },
  
  gender : {
    type: 'string',
  },
  married : {
    type: 'string', 
  },
  specialty : {
    type: 'string',
  },
  language : {
    type: 'string',
  },
  already_a_site : {
    type: 'string',
  },
  setup_center : {
    type: 'string',
  },
  mobile_num : {
    type: 'string',
  },
  employ_id : {
    type: 'string',
  },   
  designation : {
    type: 'string',
  },
  filled_service : {
    type: 'string',
  },
  professional : {
    type: 'string',
  },
  venture : {
    type: 'string',
  },
  possessite : {   
    type: 'string',
  },
  site_in_mind : {   
    type: 'string',
  },
  site_take_rent : {   
    type: 'string',
  },
  invest : {   
    type: 'string',
  },
  located_state : {   
    type: 'string',
  },
  city_venture : {   
    type: 'string',
  },
  bussiness_company : {   
    type: 'string',
  },
  give_details : {   
    type: 'string',
  },
  work_experience  : {   
    type: 'string',
  },
  many_moths : {   
    type: 'string',
  },
  business_success : {   
    type: 'string',
  },
  should_resons : {   
    type: 'string',
  },
  datetime : {   
    type: 'string',
  },
  togglelabel : {   
    type: 'string',
  },
  signature : {   
    type: 'string',
  } 


});
 


module.exports = EmpSchema = new mongoose.model("Register", empSchema); 