// This will handle button actions
function translateToUrdu() {
  const content = document.querySelector(".markdown");
  if (!content) return;

  content.innerHTML = content.innerHTML
    .replace(/Welcome to Physical AI & Humanoid Robotics/gi, "فزیکل اے آئی اور ہیومینوئڈ روبوٹکس میں خوش آمدید")
    .replace(/Overview/gi, "جائزہ")
    .replace(/Course Goals/gi, "کورس کے مقاصد")
    .replace(/Key Tools/gi, "اہم اوزار")
    .replace(/Master ROS 2 for robot control/gi, "روبوٹ کنٹرول کے لیے ROS 2 میں مہارت حاصل کریں")
    .replace(/Simulate and deploy humanoid robots/gi, "ہیومینوئڈ روبوٹس کو سمولیٹ اور ڈپلائے کریں")
    .replace(/Implement vision, language, and action pipelines/gi, "ویژن، لینگویج اور ایکشن پائپ لائنز نافذ کریں")
    .replace(/Build a capstone project: Autonomous Humanoid Robot/gi, "ایک کیپ اسٹون پروجیکٹ تیار کریں: خودمختار ہیومینوئڈ روبوٹ");

  alert("Page translated to Urdu (demo)");
}

function personalizeContent() {
  alert("Personalization feature coming soon!");
}
