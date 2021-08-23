# The Noble Cookie

## Table of Contents

- [Description](#Description)
- [Deployed Link](#Deployed-Link)
- [Technologies](#Technologies)
- [Code](#Code)
- [Gif](#Gif)
- [Author](#Author)
- [Credits](#Credits)
- [License](#License)

## Description

Hello! We designed this application for the final project at Bethel School of Technology. The sole purpose of this application was to bring to life the dream of a baker.
Some words from the bakers husband, and group member, Chad Crawford:
"Around 10 months ago, my wife and I had a conversation about how I needed a career change.  We talked about how we might be able to fund it and my wife has worked a job she dreads every morning in order for us to survive my education while being unemployed.  Now at the end of the program, we are building this website to give her the opportunity to follow her dream of baking full time.  She loves baking and decorating the cookies and this website will help her get her name and artistic ability out there better, with hopes that she can also redirect her career.  I wanted to find a way to give back to her by using what I learned at Bethel Tech.  My team was gracious enough to run with the idea!"

## Deployed-Link

- [Coming Soon](#)

## Technologies

- [JavaScript](https://www.w3schools.com/js/)
- [ReactJs](https://reactjs.org/)
- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [CSS](https://www.w3schools.com/css/)
- [HTML](https://www.w3schools.com/html/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Nodemailer](https://nodemailer.com/about/)
- [Font-Awesome](https://fontawesome.com/)
- [AWS-S3-Bucket](https://aws.amazon.com/s3/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-MDBootstrap](https://react-bootstrap.github.io/)
- [Trello](https://trello.com/)
- [Figma](https://figma.com/)

## Gif

![Gif](./noblecookie2.gif)

## Code

 - Chad Crawford's featured code -

 // GET order information/new orders
router.get("/usersubmission", async (req, res, next) => {
  let myToken = req.headers.authorization;
  console.log(myToken);

  if (myToken) {
    let currentUser = await tokenService.verifyToken(myToken);
    console.log(currentUser);

    if (currentUser) {
      let bakedGoods = await Order.find({
        email: currentUser.email,
      });
      res.json({
        message: "Let's take a look at your delicious order summary!",
        status: 200,
        currentUser,
        bakedGoods,
      });
    } else {
      res.json({
        message: "Whoops, something's not jiving",
        status: 403,
      });
    }
  }
});

 - Mat Lukac's featured code -

  const onDeleteClick = (id) => {
    console.log(id)
    axios.put(`http://localhost:3000/api/order/${id}`,{
      headers: {
        Authorization: token,
      },
    })
    .then(res => {
      console.log(res);
      window.location.reload();
    }) 
    axios.put(`http://localhost:3000/api/user/${id}`,{
      headers: {
        Authorization: token,
      },
    })
    .then(res => {
      console.log(res);
      window.location.reload();
    })
  }

 - Steven Searcy's featured code -

router.post("/send", (req, res, next) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var phoneNumber = req.body.phoneNumber;
  var address = req.body.address;
  var orderSummary = req.body.orderSummary;
  var content = `firstname: ${firstName} \n lastname: ${lastName} \n email: ${email} \n mobile: ${phoneNumber} \n address: ${address} \n order: ${orderSummary} `;

  var mail = {
    from: "The Noble Cookie",
    to: "thenoblecookies@gmail.com",
    subject: "New Message from Order Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      transporter.sendMail(
        {
          from: "The Noble Cookie",
          to: email,
          subject: "Order submission was successful",
          text: `Thank you for ordering with us! \n\n Order details\nfirstname: ${firstName} \n lastname: ${lastName} \n email: ${email} \n mobile: ${phoneNumber} \n address: ${address} \n order: ${orderSummary} `,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});

## Author

Steven Searcy

- [GitHub](https://github.com/stevenaaronsearcy)
- [linkedIn](https://www.linkedin.com/in/stevenasearcy/)

Chad Crawford

- [GitHub](https://github.com/ckcrawford)
- [linkedIn](www.linkedin.com/in/chad-crawford-olddognewtricks)

Mat Lukacs

- [GitHub](https://github.com/MathewLukacs)
- [linkedIn](https://www.linkedin.com/in/mathew-lukacs-85a40aa9/)

## Credits

- Taylor Newton, Ivan Torres, & Andrew Searcy!
- [StackOverFlow](https://stackoverflow.com/)
- [YouTube](https://youtube.com/)

## License]

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)
