exports.handler = async function (event, context) {
  // get the data from the server
  // check if the phone number already exists, if it does, return that it does
  // GET /api/v1/forms/{form_id}/submissions
  const phone = event.body.phone;
  console.log(phone);

  //   const response = await fetch(
  //     "https://api.netlify.com/api/v1/forms/contact/submissions?phone=" + phone
  //   );
  console.log("we are here");
  const response = await fetch(
    `https://api.netlify.com/api/v1/forms/contact/submissions?phone=${phone}`
  );

  console.log(response);
  const data = await response.json().then((res) => JSON.parse(res));

  console.log(data);

  //   console.log(data);

  if (data) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "This contact already exists" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "OK" }),
  };
};
