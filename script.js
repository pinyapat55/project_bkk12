// ฟังก์ชันสำหรับแสดงข้อความต้อนรับ
function welcomeMessage() {
    const message = "Welcome to the Info Centre!"; // สตริงที่ถูกต้อง
    console.log(message); // พิมพ์ข้อความลงในคอนโซล
}

// ฟังก์ชันสำหรับแสดงข้อมูล
function displayInfo() {
    const info = [
        "Information 1",
        "Information 2",
        "Information 3" // ตรวจสอบให้แน่ใจว่ามีการใส่จุลภาคที่ถูกต้อง
    ];
    
    for (let i = 0; i < info.length; i++) {
        console.log(info[i]); // พิมพ์ข้อมูลแต่ละรายการ
    }
}

// เรียกใช้ฟังก์ชัน
welcomeMessage();
displayInfo();

// ฟังก์ชันตัวอย่างที่มีปัญหา
function exampleFunction() {
    const anotherMessage = "This is another example"; // สตริงที่ถูกต้อง
    console.log(anotherMessage); // พิมพ์ข้อความลงในคอนโซล
}

// เรียกใช้ฟังก์ชันตัวอย่าง
exampleFunction();

// คำสั่งอื่น ๆ ตามที่คุณต้องการ
function additionalFunction() {
    // ตรวจสอบให้แน่ใจว่าเป็นคำสั่งที่ถูกต้อง
    console.log("This function does something else!"); 
}

// เรียกใช้ฟังก์ชันเพิ่มเติม
additionalFunction();
