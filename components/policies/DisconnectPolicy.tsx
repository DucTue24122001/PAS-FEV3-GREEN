import React from "react";
import { Box, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useTenancy } from "../../hook/TenancyProvider";
import { RootState } from "../../redux/store";

const DisconnectPolicy = () => {
  const {language} = useSelector((state: RootState) => state.client)
  const tenancy = useTenancy()
  
  return (
    <Flex w={["100%","100%","100%", "100%", "100%","1500px"]} pb={"50px"}>
      {language === "EN" && (
        <Flex
          flexDir={"column"}
          color={"rgba(255,255,255, 0.7)"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          lineHeight={2}
        >
          <Text>
            At {tenancy?.appName}, we work hard in providing our players with the best
            online and mobile gaming experience; however, we cannot always
            guarantee, with absolute certainty, the smoothness of your
            experience, due to, and not limited to, factors outside our control
            including weak internet connection as well as other circumstances
            that may lead to disconnection.
          </Text>
          <Text>
            In cases of interruption, disconnection, or other incidents
            affecting gameplay, the following policy shall take effect. Please
            read the full text, before using our services on the site. The use
            of our services is considered as having read and consented to the
            said policy.
          </Text>
          <OrderedList ml={8}>
            <ListItem>
              All players shall bear the risk of disconnection and shall be
              responsible for the reduction of risk related to their internet
              connection.
            </ListItem>
            <ListItem>
              When a player is disconnected before the bet is placed, the bet
              will not be valid, and the account balance will not be affected.
            </ListItem>
            <ListItem>
              When a player is disconnected after the bet is placed, the bet
              will be valid, and the account balance will be automatically
              adjusted. For instance, when a player places a bet and loses the
              same, the loss will reflect in the account balance.
            </ListItem>
            <ListItem>
              Players who want to verify bets and their corresponding outcomes
              shall make a formal request through Customer Support. Please note
              that this is only a verification process and does not alter the
              results of the bet.
            </ListItem>
            <ListItem>
              If problems continue, please contact Customer Support for
              assistance. Cases are independently and fully investigated.
            </ListItem>
            <ListItem>
              {tenancy?.appName} at any time and within its own discretion reserves the
              right to modify this policy and state the final verdict on all
              matters related to the same. Policy changes or related decisions
              will be communicated through in-app messages, electronic mails,
              WhatsApp, or written messages.
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              1. Live Baccarat
            </Text>
            <Text>
              The conditions for the online Live Baccarat table are as follows:
            </Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
              When disconnection occurs before a bet is placed in any of the
              choices within the Baccarat Table, the bet will not be valid and
              no adjustments are made in the account balance. This includes
              betting on either Player, Banking, Tie and/or Pair.
            </ListItem>
            <ListItem>
              When disconnection occurs after a bet is placed in any of the
              choices within the Baccarat Table, the bet will be valid and any
              adjustments are reflected in the account balance. This includes
              betting on either Player, Banking, Tie and/or Pair.
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              2. Live Roulette
            </Text>
            <Text>
              The conditions for the online Live Roulette are as follows:
            </Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
              When disconnection occurs before a bet is placed in any of the
              numbers within the Roulette table, the bet will not be valid, and
              no adjustments are made in the account balance. This includes
              betting on any number, color, even, odd, and/or number range.
            </ListItem>
            <ListItem>
              When disconnection occurs after a bet is placed in any of the
              numbers within the Roulette Table, the bet will be valid and any
              adjustments are reflected in the account balance. This includes
              betting on any number, color, even, odd, and/or number range.
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              3. Online Slots
            </Text>
            <Text>The conditions for online slot games are as follows:</Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
              When disconnection occurs before spinning, the bet will not be
              valid, and no adjustments are made in the account balance.
            </ListItem>
            <ListItem>
              When disconnection occurs after spinning, the bet will be valid,
              and adjustments are reflected in the account balance.
            </ListItem>
          </OrderedList>
        </Flex>
      )}
       {language === "MY" && (
        <Flex
          flexDir={"column"}
          color={"rgba(255,255,255, 0.7)"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          lineHeight={2}
        >
          <Text>
            388 Games သည် ကစားသမားတွေအတွက် အကောင်း‌ဆုံးသော အွန်လိုင်းနဲ့
            မိုဘိုင်းဂိမ်းအတွေ့အကြုံတွေ အစဉ်မပြတ်ရရှိနိုင်အောင်
            ကြိုးစားထောက်ပံ့ပေးလျှက် ရှိပါသည်။ သို့သော်
            အင်တာနက်လိုင်းမကောင်းခြင်း အပါအဝင် အခြားမထိန်းချုပ်နိုင်သော
            အခြေအနေများကြောင့် ကစားသမားများ၏ အဆင်ပြေ‌ချောမွေ့မှုကို အမြဲတစေ
            အာမမခံနိုင်ပါ။
          </Text>
          <Text>
            ကစားပွဲအတွင်း ဖြစ်ပေါ်လာသော နှောင့်ယှက်မှုများ၊
            လိုင်းပြတ်တောက်မှုများနှင့် အခြားသော ကစားပွဲကို
            အနှောင့်အယှက်ဖြစ်စေသည့် ကိစ္စရပ်များအတွက် အောက်ပါမူဝါဒအတိုင်းသာ
            အကျုံးဝင်မည် ဖြစ်ပါသည်။ ကျွန်ုပ်တို့၏ ဝက်ဘ်ဆိုဒ်မှ
            ဝန်ဆောင်မှုများကို အသုံးမပြုမီ အောက်ပါမူဝါဒများကို ဖတ်ရှုပေးပါ။
            ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုကို စတင်အသုံးပြုပါက မူဝါဒများကို ဖတ်ရှုပြီး
            သဘောတူပါသည်ဟု ယူဆပါမည်။
          </Text>
          <OrderedList ml={8}>
            <ListItem>
              ၁။ ကစားသမားများသည် လိုင်းပြတ်တောက်ခြင်းကြောင့် ဖြစ်ပေါ်လာသော
              အခြေအနေများနှင့် စပ်လျဉ်း၍ မိမိ ကိုယ်တိုင်သာ တာဝန်ယူရမည်
              ဖြစ်ပါသည်။
            </ListItem>
            <ListItem>
              ၂။ ကစားသမားများသည် လောင်းကြေးမတင်မီ လိုင်းပြတ်သွားပါက
              လောင်းကြေးသည် တရားဝင်မည် မဟုတ်ပါ။ မိမိ၏ အကောင့်ရှိ
              လက်ကျန်ငွေပမာဏကို ထိခိုက်စေမည် မဟုတ်ပါ။
            </ListItem>
            <ListItem>
              ၃။ ကစားသမားများသည် လောင်းကြေးတင်ပြီးမှ လိုင်းပြတ်တောက်သွားပါက
              လောင်းကြေးသည် အကျုံးဝင်မည်ဖြစ်ပြီး အကောင့်ရှိ လက်ကျန်ငွေပမာဏကို
              အလိုအလျောက်ချိန်ညှိပေးမည် ဖြစ်ပါသည်။ ဥပမာအားဖြင့် ကစားသမားသည်
              လောင်းကြေးတင်ပြီး ရှုံးသွားပါက လောင်းကြေးကို
              အလိုအလျောက်နှုတ်ယူသွားမည် ဖြစ်ပါသည်။
            </ListItem>
            <ListItem>
              ၄။ လောင်းကြေးနှင့် သက်ဆိုင်ရာရလာဒ်များကို အတည်ပြုလိုသော
              ကစားသမားများသည် ကစားသမား အကူအညီမှတစ်ဆင့် တရားဝင်တောင်းဆိုမှု
              ပြုလုပ်ရပါမည်။ ဤသည်မှာ အတည်ပြုခြင်း လုပ်ငန်းစဉ်သာဖြစ်ပြီး
              လောင်းကြေးရလာဒ်ကို ပြောင်းလဲပေးမည်မဟုတ်ပါ။
            </ListItem>
            <ListItem>
              ၅။ ပြဿနာတစ်စုံတရာရှိခဲ့ပါက ကစားသမားအကူအညီသို့ ဆက်သွယ်ပေးပါ။
              ထိုပြဿနာများကို စေ့စပ်သေချာစွာ စစ်ဆေးပေးမည်ဖြစ်ပါသည်။
            </ListItem>
            <ListItem>
              ၆။ 388 Games သည် တစ်ဦးတည်းသော ဆုံးဖြတ်ချက်ဖြင့် ဤမူဝါဒကို
              အချိန်မရွေး မွမ်းမံပြင်ဆင်ခွင့်ရှိပြီး
              အလားတူကိစ္စရပ်များအားလုံးတွင်လည်း
              အပြီးသတ်စီရင်ဆုံးဖြတ်ပိုင်ခွင့်ရှိပါသည်။ မူဝါဒ
              ပြောင်းလဲမှုများနှင့် စပ်လျဉ်း၍ ဂိမ်းအပ် စာတိုမှသော်လည်းကောင်း၊
              မေးလ်၊ ဝက်စ်အပ်မှသော်လည်းကောင်း စာတိုများ ပေးပို့သွားမည်
              ဖြစ်ပါသည်။
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ၁။ တိုက်ရိုက် ဖဲဂိမ်း
            </Text>
            <Text>
            တိုက်ရိုက် ဖဲဂိမ်းပွဲစဉ်များအတွက် သတ်မှတ်ချက်များမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည်။
            </Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
            (၁) ဖဲဝိုင်းတွင် လောင်းကြေးမတင်မီ လိုင်းပြတ်တောက်သွားပါက လောင်းကြေးသည် အကျုံးမဝင်ပါ။ အကောင့်ရှိ လက်ကျန်ငွေများကိုလည်း ချိန်ညှိမှုများ ပြုလုပ်မည်မဟုတ်ပါ။ ထိုသတ်မှတ်ချက်သည် ကစားသမား၊ ဘဏ်၊ အတွဲလိုက်ကစားသူများ အားလုံးအတွက် အကျုံးဝင်မည် ဖြစ်ပါသည်။
            </ListItem>
            <ListItem>
            (၂) ဖဲဝိုင်းတွင် လောင်းကြေးတင်ပြီးမှ လိုင်းပြတ်တောက်သွားပါက ကစားပွဲပြီးသည်နှင့်တစ်ပြိုင်နက် အကောင့်ရှိလက်ကျန်ငွေများကို ချိန်ညှိမှုများ ပြုလုပ်သွားမည် ဖြစ်ပါသည်။ ထိုသတ်မှတ်ချက်သည် ကစားသမား၊ ဘဏ်၊ အတွဲလိုက်ကစားသူများ အားလုံးအတွက် အကျုံးဝင်မည် ဖြစ်ပါသည်။
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ၂။ တိုက်ရိုက် ကာစီနို
            </Text>
            <Text>
            တိုက်ရိုက်ကာစီနို ပွဲစဉ်များအတွက် သတ်မှတ်ချက်များမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည်။ 
            </Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
            (၁) ကစားပွဲတွင် လောင်းကြေးမတင်မီ လိုင်းပြတ်တောက်သွားပါက လောင်းကြေးသည် အကျုံးမဝင်ပါ။ အကောင့်ရှိ လက်ကျန်ငွေများကိုလည်း ချိန်ညှိမှုများ ပြုလုပ်မည်မဟုတ်ပါ။ ထိုသတ်မှတ်ချက်သည် မည်သည့် နံပါတ်၊ အရောင်၊ စုံဂဏန်း၊ မဂဏန်း အားလုံးအတွက်မဆို အကျုံးဝင်ပါသည်။
            </ListItem>
            <ListItem>
            (၂) ကစားပွဲတွင် လောင်းကြေးတင်ပြီးမှ လိုင်းပြတ်တောက်သွားပါက လောင်းကြေးသည် အကျုံးဝင်မည်ဖြစ်ပြီး ကစားပွဲပြီးသည်နှင့်တစ်ပြိုင်နက် အကောင့်ရှိလက်ကျန်ငွေများကို ချိန်ညှိမှုများ ပြုလုပ်သွားမည် ဖြစ်ပါသည်။ ထိုသတ်မှတ်ချက်သည် မည်သည့် နံပါတ်၊ အရောင်၊ စုံဂဏန်း၊ မဂဏန်း အားလုံးအတွက်မဆို အကျုံးဝင်ပါသည်။
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ၃။ အွန်လိုင်းစလော့ဂိမ်း
            </Text>
            <Text>အွန်လိုင်းစလော့ဂိမ်းပွဲစဉ်များအတွက် သတ်မှတ်ချက်များမှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။</Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
            (၁) စလော့ဂိမ်းပွဲစဉ်အတွင်း ဘီးမလှည့်မီ လိုင်းပြတ်တောက်သွားပါက လောင်းကြေးသည် အကျုံးမဝင်ပါ။ အကောင့်ရှိ လက်ကျန်ငွေများကိုလည်း ချိန်ညှိမှုများ ပြုလုပ်မည်မဟုတ်ပါ။
            </ListItem>
            <ListItem>
            (၂) စလော့ဂိမ်းပွဲစဉ်အတွင်း ဘီးလှည့်ပြီးမှ လိုင်းပြတ်တောက်သွားပါက လောင်းကြေးသည် အကျုံးဝင်ပါသည်။ ထို့ကြောင့် ကစားပွဲပြီးသည်နှင့်တစ်ပြိုင်နက် အကောင့်ရှိလက်ကျန်ငွေများကို ချိန်ညှိမှုများ ပြုလုပ်သွားမည် ဖြစ်ပါသည်။
            </ListItem>
          </OrderedList>
        </Flex>
      )}
      {language === "KM" && (
        <Flex
          flexDir={"column"}
          color={"rgba(255,255,255, 0.7)"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          lineHeight={2}
        >
          <Text>
          នៅ {tenancy?.appName} យើងខិតខំប្រឹងប្រែងផ្តល់ជូនអតិថិជនរបស់យើងដែលចូលលេង នូវបទពិសោធន៍ដ៏ល្អបំផុតក្នុងការលេងល្បែងអនឡាញ និងទូរសព្ទចល័ត។ ទោះយ៉ាងណា យើងមិនអាចធានាដាច់ខាតលើភាពរលូននៃបទពិសោធន៍របស់អ្នក ដោយសារតែកត្តាទាំងឡាយដែលហួសពីការគ្រប់គ្រងរបស់យើងនោះទេ ដូចជាការភ្ជាប់អ៊ីនធឺណិតខ្សោយ និងកាលៈទេសៈផ្សេងៗដែលអាចនាំឱ្យដាច់ការតភ្ជាប់សេវា។
          </Text>
          <Text>
          ក្នុងករណីមានការរំខាន ការដាច់ការតភ្ជាប់ ឬហេតុការណ៍ផ្សេងៗដែលប៉ះពាល់ដល់ការលេងល្បែង គោលការណ៍ខាងក្រោមត្រូវមានអានុភាពអនុវត្ត។ សូមអានខ្លឹមសារទាំងស្រុង មុនពេលប្រើប្រាស់សេវារបស់យើងនៅលើគេហទំព័រ។ តាមរយៈការប្រើប្រាស់សេវារបស់យើង ត្រូវចាត់ទុកថាបានអាន និងយល់ព្រមតាមគោលការណ៍ខាងលើ។
          </Text>
          <OrderedList ml={8}>
            <ListItem>
              ១. អ្នកលេងទាំងអស់ត្រូវប្រឈមមុខនឹងហានិភ័យនៃការដាច់ការតភ្ជាប់សេវា និងទទួលខុសត្រូវក្នុងការកាត់បន្ថយហានិភ័យទាក់ទងនឹងការតភ្ជាប់អ៊ីនធឺណិតរបស់ខ្លួន។
            </ListItem>
            <ListItem>
              ២. នៅពេលដែលអ្នកលេងបានដាច់ការតភ្ជាប់សេវាមុនពេលការភ្នាល់ចាប់ផ្តើម នោះការភ្នាល់នឹងមិនមានសុពលភាពទេ ហើយមិនប៉ះពាល់ដល់សមតុល្យគណនីនោះទេ។
            </ListItem>
            <ListItem>
              ៣. នៅពេលដែលអ្នកលេងបានដាច់ការតភ្ជាប់សេវាបន្ទាប់ពីការភ្នាល់បានចាប់ផ្តើម នោះការភ្នាល់នឹងមានសុពលភាព ហើយសមតុល្យគណនីនឹងមានការកែតម្រូវដោយស្វ័យប្រវត្តិ។ ឧទាហរណ៍ នៅពេលដែលអ្នកលេងភ្នាល់ ហើយចាញ់ការភ្នាល់ ការចាញ់នឹងបង្ហាញនៅក្នុងសមតុល្យគណនី។
            </ListItem>
            <ListItem>
              ៤.  អ្នកលេងដែលចង់ផ្ទៀងផ្ទាត់ការភ្នាល់ និងលទ្ធផលភ្នាល់ ត្រូវស្នើសុំជាផ្លូវការតាមរយៈផ្នែកគាំទ្រអតិថិជន។ សូមកត់សម្គាល់ថានេះគ្រាន់តែជាដំណើរការផ្ទៀងផ្ទាត់ប៉ុណ្ណោះ និងមិនមានការកែប្រែលទ្ធផលភ្នាល់នោះទេ។
            </ListItem>
            <ListItem>
              ៥. 	ប្រសិនបើបញ្ហានៅតែបន្តកើតមាន សូមទាក់ទងមកកាន់ផ្នែកគាំទ្រអតិថិជនដើម្បីសុំជំនួយ។ ករណី​នេះនឹងត្រូវមានការស៊ើបអង្កេតដោយឯករាជ្យ និងគ្រប់ជ្រុងជ្រោយ។
            </ListItem>
            <ListItem>
            ៦​. {tenancy?.appName} រក្សាសិទ្ធិក្នុងការកែប្រែគោលការណ៍នេះបានគ្រប់ពេលផ្អែកតាមឆន្ទានុសិទ្ធិផ្ទាល់របស់ខ្លួន និងបញ្ជាក់ការវិនិច្ឆ័យចុងក្រោយលើបញ្ហាពាក់ព័ន្ធទាំងអស់។ ការកែប្រែគោលនយោបាយ ឬការសម្រេចចិត្តពាក់ព័ន្ធ នឹងធ្វើការជូនដំណឹងតាមរយៈសារក្នុងកម្មវិធី សារអេឡិចត្រូនិក WhatsApp ឬសារជាអក្សរ។
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១. ល្បែងបាការ៉ាតបន្តផ្ទាល់
            </Text>
            <Text>
            លក្ខខណ្ឌនៃការលេងល្បែងបាការ៉ាតបន្តផ្ទាល់តាមអនឡាញ មានដូចខាងក្រោម៖
            </Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
            ១. 	នៅពេលដាច់ការតភ្ជាប់សេវាមុនពេលការភ្នាល់បានចាប់ផ្តើមលើជម្រើសណាមួយនៅលើតាបល្បែង​​បាការ៉ាត នោះការភ្នាល់នឹងមិនមានសុពលភាពទេ ហើយមិនមានការកែតម្រូវណាមួយលើសមតុល្យគណនីឡើយ។ នេះរាប់បញ្ចូលទាំងការភ្នាល់លើអ្នកលេងណាមួយ តាមសេវាធនាគារ ដោយលទ្ធផលស្មើ និង/ឬជាគូ។
            </ListItem>
            <ListItem>
            ២. 	នៅពេលដាច់ការតភ្ជាប់សេវាបន្ទាប់ពីការភ្នាល់បានចាប់ផ្តើមលើជម្រើសណាមួយនៅលើតាបល្បែង​បាការ៉ាត នោះការភ្នាល់នឹងមានសុពលភាព ហើយរាល់ការកែតម្រូវត្រូវបានបង្ហាញនៅលើសមតុល្យគណនី។ នេះរាប់បញ្ចូលទាំងការភ្នាល់លើអ្នកលេងណាមួយ តាមសេវាធនាគារ ដោយលទ្ធផល​ស្មើ និង/ឬជាគូ។
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ២. ល្បែងរ៉ូឡែតបន្តផ្ទាល់
            </Text>
            <Text>
            លក្ខខណ្ឌនៃការលេងល្បែងរ៉ូឡែតបន្តផ្ទាល់តាមអនឡាញ មានដូចខាងក្រោម៖ 
            </Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
            ១. 	នៅពេលដាច់ការតភ្ជាប់សេវាមុនពេលការភ្នាល់បានចាប់ផ្តើមលើលេខណាមួយនៅលើតាបល្បែង  រ៉ូឡែត នោះការភ្នាល់នឹងមិនមានសុពលភាពទេ ហើយមិនមានការកែតម្រូវណាមួយលើសមតុល្យគណនីឡើយ។ នេះរាប់បញ្ចូលទាំងការភ្នាល់លើលេខ ពណ៌ លេខគូ លេខសេស និង/ឬជម្រើសលេខណាមួយ។
            </ListItem>
            <ListItem>
            ២. 	នៅពេលដាច់ការតភ្ជាប់សេវាបន្ទាប់ពីការភ្នាល់បានចាប់ផ្តើមលើលេខណាមួយនៅលើតាបល្បែង   រ៉ូឡែត នោះការភ្នាល់នឹងមានសុពលភាព ហើយរាល់ការកែតម្រូវត្រូវបានបង្ហាញនៅលើសមតុល្យគណនី។ នេះរាប់បញ្ចូលទាំងការភ្នាល់លើលេខ ពណ៌ លេខគូ លេខសេស និង/ឬជម្រើសលេខណាមួយ។
            </ListItem>
          </OrderedList>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ៣. ល្បែងស្លុតតាមអនឡាញ
            </Text>
            <Text>លក្ខខណ្ឌនៃការលេងល្បែងស្លុតតាមអនឡាញ មានដូចខាងក្រោម៖</Text>
          </Box>
          <OrderedList ml={8}>
            <ListItem>
            ១. 	នៅពេលដាច់ការតភ្ជាប់សេវាមុនពេលបង្វិល នោះការភ្នាល់នឹងមិនមានសុពលភាពទេ ហើយមិនមានការកែតម្រូវណាមួយលើសមតុល្យគណនីឡើយ។
            </ListItem>
            <ListItem>
            ២. 	នៅពេលដាច់ការតភ្ជាប់សេវាបន្ទាប់ពីការបង្វិល នោះការភ្នាល់នឹងមានសុពលភាព ហើយរាល់ការកែតម្រូវត្រូវបានបង្ហាញនៅលើសមតុល្យគណនី។
            </ListItem>
          </OrderedList>
        </Flex>
      )}
    </Flex>
  );
};

export default DisconnectPolicy;
