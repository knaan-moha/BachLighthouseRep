const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Set to true to run without the browser UI
  const page = await browser.newPage();
  const formURL = "http://localhost:3000/student/new"; // URL of the form
  const homeURL = "http://localhost:3000/"; // URL to navigate back to after submitting

  function formatDate(date) {
    const day = `0${date.getDate()}`.slice(-2); // Add leading 0 if necessary
    const month = `0${date.getMonth() + 1}`.slice(-2); // Add leading 0 if necessary, months are 0-indexed
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  // Generate today's date in the format DD.MM.YYYY
  const today = formatDate(new Date());

  // Replace the below data with your own
  const studentsData = [
    {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      age: 20,
      phoneNumber: "1234567890",
      registrationDate: today,
      courseId: "IKT-205", // Make sure this matches the value attribute of the option
    },
    // ... Add more student data objects as needed
  ];

  for (const student of studentsData) {
    await page.goto(formURL); // Navigate to the form page
    // Fill in the form fields
    await page.type('input[name="firstName"]', student.firstName);
    await page.type('input[name="lastName"]', student.lastName);
    await page.type('input[name="email"]', student.email);
    await page.type('input[name="age"]', student.age.toString());
    await page.type('input[name="phoneNumber"]', student.phoneNumber);
    await page.click('input[name="registrationDate"]', { clickCount: 3 });
    await page.click('input[name="registrationDate"]', { clickCount: 3 });
    await page.keyboard.press("Backspace");
    await page.type('input[name="registrationDate"]', student.registrationDate);

    // Manually trigger the change event if necessary (may not be needed if typing triggers it)
    await page.evaluate(() => {
      const event = new Event("input", { bubbles: true });
      const element = document.querySelector('input[name="registrationDate"]');
      element.dispatchEvent(event);
    });

    //await page.focus('input[name="registrationDate"]', student.registrationDate);
    await page.$eval(
      'select[name="courseId"]',
      (el, value) => {
        el.value = value;
        el.dispatchEvent(new Event("change", { bubbles: true }));
      },
      student.courseId
    );
    // await page.select('select[name="courseId"]', student.courseId);
    await page.waitForSelector(".success-message", { timeout: 20000 });

    // Submit the form
    await Promise.all([
      page.waitForResponse((response) => response.status() === 200),
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: "networkidle0", timeout: 60000 }), // Increase timeout to 60 seconds
    ]).catch((e) => {
      console.error(`Error submitting form for ${student.firstName}:`, e);
    });

    // Close the browser
    await browser.close();

    // Navigate back home after submission is complete
    await page.goto(homeURL); // Replace with your actual home URL if different
  }

  // Close the browser
  await browser.close();
})();
