#VALIDATION DOCUMENT
##### By: quangpn7
###### ==Date: 14 Oct 2022==

---
## BASIC RULES
- Email: include @ and '.' .
- Password: lowercase, Uppercase,number , speci@l characters included.
- Confirm password: must be matched with password above, user cannot copy  the inputed password above into clipboard.
- Name: A-Za-z characters only (included Vietnamese).
- Phone: only number (supported by HTML), length 9-16 (based on international phone number standard), +(regional number) excepted.
- Gender: auto select male (true on load), prevented from users uncheck by inspecting code.
---
## TEST CASE
>**1. Email:**

    - phannhutquang7820@gmail.com - PASSED
    - phanhutquang7820.com - failed "@"-missing
    - phannhutquang7820@gmail - failed "."-missing

>**2. Password:**

    - 776389@Quangg - PASSED
    - 7623123@quangg - failed "uppercase"-missing
    - 8271235Quangg - failed "special charaters"-missing
    - qu@Auangggg - failed "number"-missing
    - 0763998271628@Quangg - failed "length"-too long (max = 16)
    - @123Cy - failed "length"-too short (min = 8)
  
**3. Name:**
    
    - Phan Nhut Quang - PASSED
    - Phan Nhựt Quang - PASSED
    - PhanNhutQuang - PASSED
    - phan nhut quang - PASSED
    - phan nhựt quang - PASSED
    - PHAN NHUT QUANG - PASSED
    - PHAN NHỰT QUANG - PASSED
    - Phan Nhựt Quang 7 - failed "number" was included
    - Ph@an nhựt Qu@ang - failed "special character/s was/were included"
**4. Phone**

    - 0763907866 - PASSED
    - +8463907866 - PASSED
    - 123345 - failed "length"-too short (min = 9)
    - 293712937901273120 "length"-too long (max = 16)
---
## QUICK PASSED TEST
#### -Email: harryMaguire@gmail.com
#### -Password: 776352@Harry
#### -Name: Harry Maguire
#### -Phone: +1877629927

