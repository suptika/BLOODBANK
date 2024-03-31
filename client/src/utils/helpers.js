import moment from "moment";


export const getLoggedInUserName = (user) => {
  if (user.userType === "donar") {
    return user.name;
  } else if (user.userType === "hospital") {
    return user.hospitalName;
  } else if (user.userType === "organization") {
    return user.organizationName;
  }
};

export const getAntdInputValidation = () => {
  return [
    {
      required: true,
      message: "Required",
    },
  ]
};


export const getMailInputValidation = () =>{
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return [
    {
      required: true,
      message: "Required",
    },
    {
      validator: (_, value) => {
        if (value && !emailRegex.test(value)) {
          return Promise.reject('Please enter a valid email address');
        }
        return Promise.resolve();
      },
    },
  ];
  
}


export const getMobInputValidation = () => {
  return [
    {
      required: true,
      message: "Required",
    },
    {
      validator: (_, value) => {
        if (value && value.length === 10 && /^\d+$/.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject("Mobile number should be a 10-digit number.");
      },
    },
  ];
};


export const getDateFormat = (date) => {
  return moment(date).format("DD MMM YYYY hh:mm A");
}