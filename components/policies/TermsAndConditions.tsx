import { Box, Flex, Text } from "@chakra-ui/react";
import { ErrorText } from "../constants/NotificationText";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTenancy } from "../../hook/TenancyProvider";

const TermsAndConditions = () => {
  const { language } = useSelector((state: RootState) => state.client);
  const tenancy = useTenancy();

  return (
    <Flex w={["100%","100%","100%", "100%", "100%","1500px"]} pb={"50px"}>
      {language === "EN" && (
        <Flex
          flexDir={"column"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          color={"rgba(255,255,255, 0.7)"}
        >
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={700}>
              Terms and Conditions
            </Text>
            <ErrorText fontSize={[14, 14, 16, 16]}>
              Important: If you wish to bet, or to play games for real money,
              you will need to open an account with us. By opening an account
              with us, you agree to be bound by our Terms and Conditions as set
              out below.
            </ErrorText>
          </Box>
          <Box>
            <Text>
              <span style={headList}>1. </span>
              The “Eurobet Rules” are the terms and conditions
              constituting the complete, final and exclusive agreement between
              the Account Holder (“you”) and Eurobet, and governing
              the contractual relationship between Eurobet and the
              Account Holder. The Eurobet Rules supersede and merge
              all prior agreements, representations, and understandings between
              the Account Holder and Eurobet. By opening a{" "}
              Eurobet Account, registering, logging-in, using the
              Services, participating in the games, or accepting any prize, a
              visitor or an Account Holder fully understands and agrees:
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>a. </span>
              To become a party to the Eurobet Rules,
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>b. </span>
              That he/she has read, understood and will be adhering to these
              Terms and Conditions, and that he/she shall abide by all its
              terms.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>2. </span>
              Eurobet may update, amend, edit and supplement the Eurobet Rules
              at any time. Any substantial amendment to the Eurobet Rules shall
              be notified in advance by Eurobet to the Account Holder, before
              coming into effect and will require your consent. If you do not
              agree with the amendment(s) to the Eurobet rules, you will not be
              permitted to continue using the Services. All references in the Eurobet Rules to the singular shall include the plural and vice
              versa. All references to “the” shall include “a/an” and vice
              versa.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>3. </span>
              An “Account Holder” is an individual having a contractual
              relationship with Eurobet by creating a{" "}
              Eurobet Account on the Website.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>4. </span>A “Eurobet Account” is
              an account held by an Account Holder, for bona fide transactions,
              with a strict aim to establish a normal commercial relationship
              with Eurobet and with the strict purpose of conducting
              betting and other gaming and gambling transactions.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>5. </span>
              The “Contract” is the contractual relationship between Eurobet and an Account Holder and shall be constituted under and governed
              by the Eurobet Rules, i.e. the “Terms and Conditions”.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>a. </span>
              The “Website” is the internet gateway accessible through the
              internet address www.eurobetmm.com where all current and relevant
              information regarding Eurobet’s operations is published, and
              through which the Services are provided to the Account Holders.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>b. </span>
              The “Services” are the gaming and betting offers provided by Eurobet to the Account Holder through the Website.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>c. </span>A “Card” refers to all types of
              cards with a function of “payment”, “charge”, “debit”, “credit”,
              “virtual” and/or similar.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>d. </span>
              The “Payment Solution Provider” is an intermediary acting as a
              payment agent for various different payment methods.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>e. </span>
              “Financial Institution” is a bank and/or other institution
              regulated by an applicable domestic financial services Act or
              similar.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>f. </span>
              “Force Majeure” refers to any occurrence or condition beyond one’s
              reasonable control which leads to a delay or default in the
              performance of the affected party’s contractual obligation and
              shall, for the purposes of the Eurobet Rules, include
              Acts of God, government restrictions (including the denial or
              cancellation of any necessary license where such denial or
              cancellation is made through no fault of the affected party),
              wars, outbreak of hostilities, riots, civil disturbances,
              insurrections, acts of terrorism, fire, explosions, floods, theft,
              malicious damage, strikes, lockouts, and/or any other cause beyond
              the reasonable control of the party whose performance is affected.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>g. </span>
              “Client Application” shall mean the web browser application and
              mobile App (Android or IOS versions) opened by the Account Holder
              in order to use the Services.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>h. </span>
              “Software” shall mean all software or App (Android or IOS
              versions) used by Eurobet to offer and/or operate the
              Services and/or run the Client Application.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>i. </span>A “Prize” is an amount, a bonus
              or a reward that can be won by the Account Holder.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>j. </span>
              An “Inactive Account” is a Eurobet Account which has
              not recorded any log-in and/or logout for a period exceeding 12
              consecutive months.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>k. </span>
              All trademarks, service marks and trade names as well as images,
              graphics, text, concepts or methodologies (collectively the
              “Intellectual Assets”) found on the Website, the Client
              Application and the material contained therein are the exclusive
              property of Eurobet and/or Eurobet’s
              suppliers and partners. The Account Holder is not entitled to
              exploit or otherwise use any Intellectual Asset for whatever
              purpose, except for what is allowed by law.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>6. </span>
              Account Rules:
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>a. </span>
              An individual cannot participate in a game for money unless that
              individual is an Account Holder. To be registered as a player, an
              individual must register personally and apply for registration.
              The following information must be provided:
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>b. </span>
              Date of birth and provide valid identification showing that the
              player is over eighteen (18) years of age or the applicable legal
              age of majority as stipulated in the jurisdiction of your
              residence (identification documents which must be submitted
              include: a copy of a valid identity card, passport or driving
              license);
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>c. </span>
              Player’s first and last name;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>d. </span>
              Player’s valid email address; and
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>e. </span>A username and a password
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>7. </span>
              An individual applying to become an Account Holder warrants and
              represents not to be under the age of eighteen (18) years. Minors
              cannot register as a player and cannot hold a {
                tenancy?.appName
              }{" "}
              Account.
              Eurobet reserves the right to request additional proof
              of age and perform additional checks in order to verify the
              information provided. A Eurobet Account may be
              suspended until satisfactory proof of age is provided.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>8. </span>
              All personal and confidential information provided to{" "}
              Eurobet by its players remains confidential with{" "}
              Eurobet and is used ONLY on the Eurobet{" "}
              system for improving user-experience, and not for commercial
              purposes.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>9. </span>
              An individual applying to become an Account Holder furthermore
              warrants and represents:
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>a. </span>
              To be a physical person (a legal entity will not be accepted as an
              Account Holder);
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>b. </span>
              Not to be a professional player in any sport, competition or
              league where Eurobet offers betting;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>c. </span>
              Not to be restricted by limited legal capacity;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>d. </span>
              Not to be acting on behalf of another party;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>e. </span>
              Not to be classified as a compulsive problem gambler, and/or be
              included (whether voluntarily or involuntarily) on any register or
              database of excluded players;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>f. </span>
              Not to be depositing monies originating from criminal and/or other
              illegal activities;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>g. </span>
              Not to be depositing monies through a Card which the Account
              Holder is not authorized to use and/or utilizing a Card in a
              jurisdiction in which betting and gaming are prohibited;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>h. </span>
              Not to be conducting criminal activities whereby a Eurobet Account is directly or indirectly involved;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>i. </span>
              Not to be holding an active account with another legal entity
              which is part of the same group as Eurobet;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>j. </span>
              Not to use the Services if it is illegal in his/her country of
              residence or otherwise restricted for him/her to open a gaming
              account, purchase or use services from Eurobet and/or otherwise
              participate in the games offered. It is the Account Holder’s
              responsibility to ensure his/her use of Eurobet’s Website and
              Services is legal;
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>k. </span>. Not to find the Website or the
              Services offensive, objectionable, unfair, nor indecent; and to
              maintain his/her Eurobet Account details up-to-date in
              terms of the following: first and last name, country of residence,
              valid email address and phone number.
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>l. </span>
              Only one account is allowed per player. Player found abusing any
              promotion, opening multiple or fraudulent accounts and violating
              betting policies will have their accounts locked and forfeited
              deposits without prior notice.
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>10. </span>
              An individual applying for a Eurobet Account
              acknowledges and accepts:
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>a. </span>
              All definitions and stipulations as stated under the Eurobet Rules; the Eurobet Rules as currently published on the Website,
              as well as any possible future changes to the Eurobet Rules;
            </Text>
          </Box>
        </Flex>
      )}
      {language === "MY" && (
        <Flex
          flexDir={"column"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          color={"rgba(255,255,255, 0.7)"}
        >
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={700}>
              စည်းကမ်းနှင့် သတ်မှတ်ချက်များ
            </Text>
            <ErrorText fontSize={[14, 14, 16, 16]}>
              သတိပြုရန် - အကယ်၍ သင်သည် လောင်းကြေးတင်လိုပါက၊ သို့မဟုတ်
              ငွေအစစ်နှင့် ကစားလိုပါက ကျွန်ုပ်တို့ထံတွင်
              အကောင့်ဖွင့်ရန်လိုပါသည်။ ကျွန်ုပ်တို့ထံတွင်
              အကောင့်ဖွင့်ခြင်းအားဖြင့် ကျွန်ုပ်တို့၏ စည်းမျဉ်းနှင့်
              သတ်မှတ်ချက်များကို သဘောတူသည်ဟု ယူဆပါသည်။{" "}
            </ErrorText>
          </Box>
          <Box>
            <Text>
              <span style={headList}>1. </span>
              “388 ဂိမ်း စည်းမျဉ်းများ” သည် အကောင့်ဖွင့်သူ သင်နှင့် 388 ဂိမ်း
              ထိန်းချုပ်သူများအကြား ပြီးပြည့်စုံကာ ညီမျှသည့် သဘောတူညီချက်များကို
              ဖော်ပြသည့် စည်းကမ်းသတ်မှတ်ချက်များဖြစ်ပါသည်။ 388 ဂိမ်းအကောင့်ကို
              ဖွင့်လှစ်ခြင်း၊ မှတ်ပုံတင်ခြင်း၊ အကောင့်ဝင်ခြင်း၊
              ဝန်ဆောင်မှုများကို အသုံးပြုခြင်း၊ ဂိမ်းတစ်ခုခုတွင်ပါဝင်ခြင်း၊
              ဆုလက်ခံခြင်းဖြင့် အောက်ပါအချက်အလက်များအား သဘောတူပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(က) </span>
              388 ဂိမ်း စည်းမျဉ်းများ၏ အဖွဲ့ဝင်ဖြစ်ပါမည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ခ)</span>
              ဤစည်းကမ်းချက်များကို ဖတ်ရှုပြီး နားလည်သဘောပေါက်ကာ
              လိုက်နာရမည့်စည်းကမ်းချက်များအားလုံးကို လိုက်နာဆောင်ရွက်ပါမည်။
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၂။ </span>
              388 ဂိမ်းသည် ၎င်း၏ စည်းမျဉ်းများကို အချိန်မရွေး အပ်ဒိတ်လုပ်ခြင်း၊
              ပြင်ဆင်ခြင်း၊ တည်းဖြတ်ခြင်းနှင့် ဖြည့်စွက်ခြင်းများ
              ပြုလုပ်နိုင်ပါသည်။ 388 ဂိမ်း စည်းမျဉ်းများဆိုင်ရာ များပြားလှသော
              ပြင်ဆင်ချက်မှန်သမျှ မလုပ်ဆောင်မီ 388 ဂိမ်းအကောင့်ပိုင်ရှင်ထံ
              ကြိုတင်အကြောင်းကြားမည်ဖြစ်ပြီး သင်၏ခွင့်ပြုချက် လိုအပ်မည်ဖြစ်သည်။
              388 ဂိမ်းစည်းမျဉ်းများ ပြင်ဆင်ချက်များကို သဘောမတူပါက
              ဝန်ဆောင်မှုများကို ဆက်လက်အသုံးပြုခွင့် မပြုပါ။ 388 ဂိမ်း
              ကိုးကားချက်တွင်ပါဝင်သည့် အနည်းကိန်းနှင့်
              အများကိန်းအသုံးပြုချက်များမှာ အပြန်အလှန်သက်ရောက်မှုရှိပါသည်။
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၃။ </span>
              အကောင့်ကိုင်ဆောင်သူသည် ဝက်ဘ်ဆိုဒ်ပေါ်တွင်
              အကောင့်ဖွင့်ခြင်းအားဖြင့် 388 ဂိမ်းနှင့် စာချုပ်အရ ပတ်သက်မှုရှိမည်
              ဖြစ်ပါသည်။
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၄။ </span>
              388 ဂိမ်းအကောင့်သည် 388 ဂိမ်းနှင့်
              စစ်မှန်သောငွေလွှဲမှုများလုပ်ဆောင်ရန်၊ လောင်းကြေးတင်ရန်
              စသည့်ရည်ရွယ်ချက်များဖြင့် အကောင့်ကိုင်ဆောင်သူမှ ဖွင့်ထားသော
              အကောင့်တစ်ခုဖြစ်သည်။
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၅။</span>
              စာချုပ်သည် 388 ဂိမ်းနှင့် အကောင့်ကိုင်ဆောင်သူကြားရှိ
              စာချုပ်ဆိုင်ရာ ဆက်ဆံရေးဖြစ်ပြီး 388 ဂိမ်း
              စည်းမျဉ်းသတ်မှတ်ချက်များဖြစ်သည့် {"စည်းမျဥ်းစည်းကမ်းများ"}{" "}
              အောက်တွင် ဖွဲ့စည်းကာ အုပ်ချုပ်ထားခြင်း ဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(က)</span>
              “ဝက်ဘ်ဆိုဒ်”ဆိုသည်မှာ www.{window.location.host} မှတစ်ဆင့်
              ယခုလက်ရှိ 388 ဂိမ်းနှင့် သက်ဆိုင်သည့်
              သတင်းအချက်အလက်များဖော်ပြပေးသည့် အင်တာနက် ဝင်ပေါက်တစ်ခုဖြစ်ပြီး
              ထိုမှတစ်ဆင့် အကောင့်ကိုင်ဆောင်သူများထံသို့ ဝန်ဆောင်မှုများပေးသည့်
              နေရာတစ်ခုဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ခ)</span>
              “ဝန်ဆောင်မှု” ဆိုသည်မှာ 388 ဂိမ်းမှတစ်ဆင့်
              အကောင့်ကိုင်ဆောင်သူများထံသို့ ကမ်းလှမ်းသည့်
              လောင်းကစားကမ်းလှမ်းမှုများဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဂ)</span>
              {"ကတ်"} ဆိုသည်မှာ {"ငွေပေးချေမှု"}, {"အခကြေးငွေ"}, {"ဒက်ဘစ်"},{" "}
              {"ခရက်ဒစ်"} အပြင် အလားတူလုပ်ဆောင်သည့် ကတ်အမျိုးအစားအားလုံးကို
              ရည်ညွှန်းပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဃ)</span>
              “ငွေပေးချေမှု ဖြေရှင်းပေးသူ” ဆိုသည်မှာ အမျိုးမျိုးသော
              ငွေပေးချေမှုနည်းလမ်းများအတွက် ကြားခံအနေနှင့် ဆောင်ရွက်ပေးသည့်
              အေးဂျင့်ဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(င)</span>
              “ငွေကြေးဆိုင်ရာအဖွဲ့အစည်း” ဆိုသည်မှာ သက်ဆိုင်ရာပြည်တွင်းဘဏ္ဍာရေး
              သို့မဟုတ် အလားတူဝန်ဆောင်မှုပေးသည့် အဖွဲ့အစည်းတစ်ခုဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(စ)</span>
              “မထိန်းချုပ်နိုင်သည့် အခြေအနေများ” ဆိုသည်မှာ
              သာမန်ထိန်းချုပ်နိုင်သည့်အခြေအနေထက် ကျော်လွန်သော
              ကိစ္စရပ်များကြောင့် ဖြစ်ပေါ်လာသည့် အခြေအနေများကို
              ဆိုလိုခြင်းဖြစ်ပါသည်။ ဥပမာအားဖြင့် ဘုရားသခင်၏ လုပ်ဆောင်ချက်များ၊
              အစိုးရ၏ တားမြစ်ချက်များ (အဖွဲ့ဝင်မှ အပြစ်မလုပ်ထားသော်လည်း
              ဖျက်သိမ်းခိုင်းသည့် လိုင်စင်များ)၊ စစ်ပွဲများ၊
              ရန်လိုမှုများဖြစ်ပွားမှု၊ အဓိကရုဏ်းများ၊ လူထုအနှောက်အယှက်များ၊
              သောင်းကျန်းမှုများ၊ အကြမ်းဖက်လုပ်ရပ်များ၊ မီးလောင်မှု၊
              ပေါက်ကွဲမှုများ၊ ရေကြီးမှု၊ ခိုးမှု၊ အန္တရာယ်ရှိသော ပျက်စီးခြင်း၊
              သပိတ်မှောက်ခြင်း၊ ပိတ်ဆို့မှုများ အစရှိသဖြင့်
              ကျွန်ုပ်တို့ထိန်းချုပ်မှုထက် ကျော်လွန်သော အခြေအနေများ ပါဝင်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဆ)</span>
              “အသုံးပြုသူ အက်ပလီကေးရှင်း” ဆိုသည်မှာ ဝန်ဆောင်မှုကို
              အသုံးပြုရန်အတွက် အကောင့်ကိုင်ဆောင်သူမှ ဖွင့်ထားသည့်
              မိုဘိုင်းလ်အပ်ကို ဆိုလိုခြင်းဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဇ)</span>
              “ဆော့ဖ်ဝဲလ်” ဆိုသည်မှာ ဝန်ဆောင်မှုများနှင့် အသုံးပြုသူ
              အက်ပလီကေးရှင်းကို လည်ပတ်ရန်အတွက် 388 ဂိမ်းမှ အသုံးပြုသည့်
              ဆော့ဖ်ဝဲလ် သို့မဟုတ် အက်ပ် အားလုံးကို ဆိုလိုခြင်းဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(စျ)</span>
              “ဆု” ဆိုသည်မှာ အကောင့်ကိုင်ဆောင်သူမှ ရရှိနိုင်သည့် အပိုဆု
              သို့မဟုတ် လက်ဆောင်ကို ဆိုလိုခြင်း ဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ည)</span>
              “လုပ်ဆောင်မှုမရှိသော အကောင့်” ဆိုသည်မှာ တစ်ဆယ့်နှစ်လဆက်တိုက် အက်ပ်
              သို့မဟုတ် ဝက်ဘ်ဆိုဒ်ကို ဝင်ရောက် အသုံးပြုခြင်းမရှိသည့် အကောင့်ကို
              ဆိုလိုခြင်း ဖြစ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဋ)</span>
              ကုန်သွယ်မှုအမှတ်တံဆိပ်များ၊ ဝန်ဆောင်မှုအမှတ်အသားများနှင့်
              ကုန်သွယ်မှုအမည်များအပြင် ရုပ်ပုံများ၊ ဂရပ်ဖစ်များ၊ စာသားများ၊
              အယူအဆများ သို့မဟုတ် နည်းစနစ်များ စသည့် ဝဘ်ဆိုက်၊ အသုံးပြုသူ
              အက်ပလီကေးရှင့်နှင့် ၎င်းတွင်ပါရှိသော ပစ္စည်းတို့သည် 388 ဂိမ်းနှင့်
              388 ဂိမ်း၏ ထောက်ပံ့သူများနှင့် ပါတနာများ၏
              သီးသန့်ပိုင်ဆိုင်မှုများသာ ဖြစ်ပါသည်။ အကောင့်ကိုင်ဆောင်ထားသူသည်
              ဥပဒေအရ ခွင့်ပြုထားသည့်အရာမှလွဲ၍ မည်သည့်ရည်ရွယ်ချက်အတွက်မဆို
              ထိုပစ္စည်းများကို အမြတ်ထုတ်ခြင်း သို့မဟုတ် အခြားနည်းများအတွက်
              အသုံးပြုခွင့်မရှိပါ။
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၆။</span>
              အကောင့် စည်းမျဉ်းများ
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(က)</span>
              အကောင့်မဖွင့်ထားသူများသည် ငွေဖြင့်ကစားရသောပွဲများတွင်
              ပါဝင်နိုင်မည် မဟုတ်ပါ။ ကစားသမားအဖြစ် မှတ်ပုံတင်ရန်
              အောက်ပါအချက်အလက်များ တင်သွင်းရန်လိုအပ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ခ)</span>
              မွေးနေ့နှင့် အသက် တစ်ဆယ့်ရှစ်နှစ်အထက်ဖြစ်ကြောင်း သက်သေပြနိုင်သည့်
              အထောက်အထား (မှတ်ပုံတင်၊ ပတ်စ်ပို့၊ ယာဉ်မောင်းလိုင်စင် မိတ္တူ)
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဂ) </span>
              ကစားသမား နာမည်အပြည့်အစုံ
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဃ)</span>
              ကစားသမား အီးမေးလ်လိပ်စာ
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(င) </span>
              အသုံးပြုသူအမည်နှင့် စကားဝှက်
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၇။ </span>
              အကောင့်ကိုင်ဆောင်ထားသူဖြစ်ရန် လျှောက်ထားသူတစ်ဦးသည်
              အသက်တစ်ဆယ့်ရှစ်နှစ်အောက်မဖြစ်ရပါ။ အရွယ်မရောက်သေးသူများသည်
              ကစားသမားအဖြစ် စာရင်းသွင်း၍ မရသည့်အပြင် 388 ဂိမ်းအကောင့်ကို
              ကိုင်ဆောင်၍မရပါ။ 388 ဂိမ်းသည် ဂိမ်းတွင် ပေးထားသည့်
              အချက်အလက်များကို အတည်ပြုရန်အတွက် လိုအပ်သော အသက် အထောက်အထားကို
              တောင်းဆိုရန်နှင့် စစ်ဆေးမှုများ လုပ်ဆောင်ရန် အခွင့်ရှိပါသည်။
              လုံလောက်သော အသက်အထောက်အထား မပြနိုင်မချင်း 388 ဂိမ်းအကောင့်ကို
              ဆိုင်းငံ့ထားမည်ဖြစ်သည်။
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၈။</span>
              388 ဂိမ်း ကစားသမားများက ပေးအပ်သော ကိုယ်ရေးကိုယ်တာနှင့်
              လျှို့ဝှက်အချက်အလက်များအားလုံးကို 388 ဂိမ်းတွင်
              လျှို့ဝှက်ထားရှိပြီး သုံးစွဲသူများ၏အတွေ့အကြုံကို
              မြှင့်တင်ရန်အတွက်သာ 388 ဂိမ်း စနစ်တွင်သာ အသုံးပြုမည်ဖြစ်ပြီး
              စီးပွါးဖြစ် အသုံးပြုမည် မဟုတ်ပါ။
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>၉။ </span>
              အကောင့်ကိုင်ဆောင်ထားသူဖြစ်ရန် လျှောက်ထားသူများသည်
              အောက်ပါအချက်များအား ထပ်မံအာမခံရန် လိုအပ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(က)</span>
              သာမန်ပြည်သူတစ်ဦးဖြစ်ရပါမည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ခ) </span>
              388 ဂိမ်းမှ ကမ်းလှမ်းသည့် ပြိုင်ပွဲများ၏ ကြေးစားကစားသမားများ
              မဖြစ်ရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဂ)</span>
              တရားဝင် ကန့်သတ်ထားခြင်းခံရသူများ မဖြစ်ရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဃ) </span>
              အခြားသူကိုယ်စား ကစားပေးသူမဖြစ်ရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(င) </span>
              လောင်းကစားကို အဓမ္မစွဲလမ်းနေသူများ အဖြစ် ဒေတာဘေ့စ်တွင်
              စာရင်းသွင်းခံထားရသူ မဖြစ်ရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(စ) </span>
              ရာဇ၀တ်မှု သို့မဟုတ် အခြားတရားမဝင် လှုပ်ရှားမှုများမှ
              ပေါ်ပေါက်လာသော ငွေများကို အပ်နှံခြင်းမပြုရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဆ)</span>
              လောင်းကစားနှင့် ဂိမ်းများအား တားဆီးထားသောကတ်ဖြင့်
              ငွေသွင်းခြင်းမပြုရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဇ) </span>
              388 ဂိမ်းအကောင့်အား ရာဇ၀တ်မှုဆိုင်ရာ လှုပ်ရှားမှုများတွင်
              တိုက်ရိုက်ဖြစ်စေ၊သွယ်ဝိုက်၍ဖြစ်စေ ပါဝင်ပတ်သက်ခြင်း မပြုရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဈ)</span>
              388 ဂိမ်းအဖွဲ့၏ အစိတ်အပိုင်းဖြစ်သည့်
              အခြားတရားဝင်အဖွဲ့အစည်းများတွင် လက်ရှိအကောင့်ကို
              ကိုင်ဆောင်ခြင်းမပြုရ။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ည) </span>
              သင်နေထိုင်ရာနိုင်ငံအတွင်း ဤဂိမ်းများသည် တရားမဝင်ပါက၊ သို့မဟုတ်
              ကန့်သတ်ခြင်းခံထားရပါက ကျွန်ုပ်တို့၏ ဝန်ဆောင်များကို
              ဝယ်ယူအသုံးပြုနိုင်မည်မဟုတ်သလို ကျွန်ုပ်တို့
              ကမ်းလှမ်းသည့်ပွဲများတွင်လည်း ပါဝင်နိုင်မည် မဟုတ်ပါ။ 388
              ဂိမ်းဝန်ဆောင်မှုကို တရားဝင် အသုံးပြုနိုင်ရန်မှာ
              ကတ်ကိုင်ဆောင်သူထံတွင်သာ တာဝန်ရှိပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဋ) </span>
              ဝက်ဘ်ဆိုဒ်၏ ဝန်ဆောင်မှုများအား ကန့်ကွက်ခြင်း၊ အငြင်းပွါးခြင်း၊
              မတရားမှုများ၊ မသင့်လျော်သောကိစ္စရပ်များမရှိစေရန်နှင့် သင်၏
              အချက်အလက်များအား ထိန်းသိမ်းရန် သင်၏ အမည်အပြည့်အစုံ၊
              နေထိုင်ရာနိုင်ငံ၊ အီးမေးလ်လိပ်စာ၊ ဖုန်းနံပါတ်များကို
              အချိန်နှင့်တပြေးညီ တင်ပြရန် လိုအပ်ပါသည်။
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>(ဌ) </span>
              ကစားသမားတစ်ဦးလျှင် အကောင့်တစ်ခုဆီသာ အသုံးပြုခွင့်ရှိပါသည်။ အကယ်၍
              တစ်ခုထက်ပိုသော အကောင့်များဖြင့် ပရိုမိုးရှင်းများရယူခြင်း၊
              လောင်းကစားစည်းမျဉ်းများ ချိုးဖောက်ခြင်းကို တွေ့ရှိပါက
              ကြိုတင်အသိပေးခြင်းမရှိဘဲ အကောင့်ကို ပိတ်သိမ်းသွားမည်ဖြစ်ပြီး
              အကောင့်ရှိ ငွေများကိုလည်း သိမ်းဆည်းခံရမည်ဖြစ်ပါသည်။
            </Text>
          </Box>
        </Flex>
      )}
      {language === "KM" && (
        <Flex
          flexDir={"column"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          color={"rgba(255,255,255, 0.7)"}
        >
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={700}>
              ប្រការ និងលក្ខខណ្ឌ
            </Text>
            <ErrorText fontSize={[14, 14, 16, 16]}>
              ប្រការសំខាន់៖ ប្រសិនបើអ្នកចង់ភ្នាល់ ឬលេងល្បែងដាក់លុយពិត អ្នកត្រូវបើកគណនីជាមួយយើង។ តាមរយៈការបើកគណនីជាមួយយើង អ្នកយល់ព្រមគោរពតាមប្រការ និងលក្ខខណ្ឌរបស់យើងដូចមានចែង ខាងក្រោម។{" "}
            </ErrorText>
          </Box>
          <Box>
            <Text>
              <span style={headList}>១. </span>
              “វិធានរបស់ Eurobet” គឺជាប្រការ និងលក្ខខណ្ឌដែលបង្កើតបានជាកិច្ចព្រមព្រៀងចុងក្រោយ និងផ្តាច់មុខទាំងស្រុងរវាងម្ចាស់គណនី (តទៅនេះហៅថា “អ្នក”) និង Eurobet ហើយនឹងគ្រប់គ្រងលើទំនាក់ទំនងតាមកិច្ចសន្យារវាង Eurobet និងម្ចាស់គណនី។ វិធានរបស់ Eurobet ត្រូវនិរាករណ៍ និងជាការរួមបញ្ចូលតែមួយនូវរាល់កិច្ចព្រមព្រៀង ការអះអាង និងការយោគយល់ពីមុនទាំងអស់រវាងម្ចាស់គណនី និង Eurobet ។ តាមរយៈការបើកគណនីនៅ Eurobet ការចុះឈ្មោះ ចូល ប្រើប្រាស់សេវា ចូលរួមលេងល្បែង ឬទទួលយករង្វាន់ណាមួយ នោះអ្នកចូលរួម ឬម្ចាស់គណនីយល់ច្បាស់ និងយល់ព្រម៖
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ក. </span>
              ក្លាយជាភាគីមួយនៃវិធានរបស់ Eurobet។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ខ. </span>
              ខ្លួនបានអាន យល់ និងគោរពតាមបណ្តាប្រការ និងលក្ខខណ្ឌទាំងនេះ ហើយនឹងគោរពតាមគ្រប់លក្ខខណ្ឌដែល Eurobet បានកំណត់។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>២. </span>
              Eurobet អាចធ្វើបច្ចុប្បន្នភាព កែប្រែ កែសម្រួល និងបន្ថែមវិធានរបស់ Eurobet បានគ្រប់ពេល។ រាល់វិសោធនកម្មខ្លឹមសារសំខាន់ៗលើវិធានរបស់ Eurobet នឹងត្រូវជូនដំណឹងជាមុនដោយ Eurobet ទៅដល់ម្ចាស់គណនី មុនពេលចូលជាធរមាន និងទាមទារឱ្យមានការយល់ព្រមពីអ្នក។ ប្រសិនបើអ្នកមិនយល់ព្រមតាមវិសោធនកម្មលើវិធានរបស់ Eurobet នោះអ្នកមិនត្រូវបានអនុញ្ញាតឱ្យបន្តប្រើប្រាស់សេវាទេ។ សេចក្តីយោងទាំងអស់នៅក្នុងវិធានរបស់ Eurobet ដល់ចំនួនឯកវចនៈត្រូវរាប់បញ្ចូលទាំងចំនួនពហុវចនៈផងដែរ និងច្រាសមកវិញ។ សេចក្តីយោងទាំងអស់ដល់ពាក្យការន្តណាមួយត្រូវរាប់បញ្ចូលទាំងការន្តទាំងអស់ផងដែរ និងច្រាសមកវិញ។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>៣. </span>
              “ម្ចាស់គណនី” គឺជាបុគ្គលដែលមានទំនាក់ទំនងតាមកិច្ចសន្យាជាមួយ Eurobet ដោយការបង្កើតគណនី Eurobet នៅលើគេហទំព័រ។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>៤. </span>
              “គណនី Eurobet” គឺជាគណនីដែលកាន់កាប់ដោយម្ចាស់គណនី សម្រាប់ធ្វើប្រតិបត្តិការពិតប្រាកដក្នុងគោលបំណងដាច់ខាតសម្រាប់បង្កើតទំនាក់ទំនងពាណិជ្ជកម្មធម្មតាជាមួយ Eurobet និងក្នុងគោលបំណងដាច់ខាតសម្រាប់ប្រតិបត្តិការភ្នាល់ ប្រតិបត្តិការហ្គេម និងល្បែងផ្សេងៗ។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>៥. </span>
              “កិច្ចសន្យា” គឺជាទំនាក់ទំនងតាមកិច្ចសន្យារវាង Eurobet និងម្ចាស់គណនី ហើយត្រូវបានបង្កើតឡើង និងគ្រប់គ្រងតាមវិធានរបស់ Eurobet ពោលគឺ “ប្រការ និងលក្ខខណ្ឌ”។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ក. </span>
              “គេហទំព័រ” គឺជាច្រកអ៊ីនធឺណិតដែលអាចចូលប្រើបានតាមរយៈអាសយដ្ឋានអ៊ីនធឺណិត www.{window.location.host} ដែលក្នុងនោះព័ត៌មានពាក់ព័ន្ធថ្មីៗទាំងអស់ទាក់ទងនឹងប្រតិបត្តិការរបស់ Eurobet ត្រូវបានបោះពុម្ព ហើយតាមរយៈនោះសេវាត្រូវបានផ្តល់ជូនម្ចាស់គណនី។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ខ. </span>
              “សេវា” គឺជាសំណើលេងល្បែង និងភ្នាល់ពី Eurobet ទៅកាន់ម្ចាស់គណនីតាមរយៈគេហទំព័រ។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>គ. </span>
              “កាត” សំដៅលើកាតគ្រប់ប្រភេទដែលមានមុខងារ “ទូទាត់” “គិតថ្លៃ” “ឥណពន្ធ” “ឥណទាន” “និម្មិត” និង/ឬកាតស្រដៀងគ្នា។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឃ. </span>
              “ប្រតិបត្តិករទូទាត់ប្រាក់” គឺជាអន្តរការីដែលដើរតួនាទីជាភ្នាក់ងារទូទាត់ប្រាក់តាមវិធីសាស្រ្តទូទាត់ផ្សេងៗ។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ង. </span>
              “គ្រឹះស្ថានហិរញ្ញវត្ថុ” គឺជាធនាគារ និង/ឬស្ថាប័នផ្សេងទៀតដែលគ្រប់គ្រងដោយច្បាប់ជាធរមាន ស្តីពីសេវាហិរញ្ញវត្ថុក្នុងស្រុក ឬគ្រឹះស្ថានស្រដៀងគ្នា។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ច. </span>
              “ករណីប្រធានសក្តិ” សំដៅលើព្រឹត្តិការណ៍ ឬលក្ខខណ្ឌណាមួយដែលហួសពីសមត្ថភាពគ្រប់គ្រងសមស្របរបស់បុគ្គលណាមួយ ដែលនាំទៅដល់ការយឺតយ៉ាវ ឬខកខានមិនបានបំពេញកាតព្វកិច្ចតាមកិច្ចសន្យារបស់ភាគីដែលរងផលប៉ះពាល់ ហើយសម្រាប់គោលបំណងនៃវិធានរបស់ Eurobet រួមមានអំពើរបស់អាទិទេព បម្រាមរបស់រដ្ឋាភិបាល (ដូចជាការបដិសេធ ឬលុបចោលអាជ្ញាបណ្ណចាំបាច់ណាមួយ ដែលការបដិសេធ ឬលុបចោលនោះធ្វើឡើងដោយមិនមែនជាកំហុសរបស់ភាគីដែលរងផលប៉ះពាល់) សង្គ្រាម ការផ្ទុះឡើងនូវអរិភាព កុបកម្ម ការរំខានស៊ីវិល ការបះបោរ អំពើភេរវកម្ម អគ្គីភ័យ      ការផ្ទុះ ទឹកជំនន់ ចោរកម្ម ព្យសនកម្មដោយចេតនាមិនល្អ កូដកម្ម សកម្មភាពបិទទ្វាររោងចក្រ និង/ឬបុព្វហេតុផ្សេងទៀតដែលហួសពីសមត្ថភាពគ្រប់គ្រងសមស្របរបស់ភាគីដែលរងផលប៉ះពាល់ក្នុងការ​បំពេញកាតព្វកិច្ចរបស់ខ្លួន។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឆ. </span>
              “កម្មវិធីអតិថិជន” មានន័យថាកម្មវិធីរុករកតាមអ៊ីនធឺណិត និងកម្មវិធីទូរសព្ទចល័ត (កម្មវិធី Android ឬ IOS) ដែលម្ចាស់គណនីបើកដំណើរសម្រាប់ប្រើប្រាស់សេវា។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ជ. </span>
              កម្មវិធី “សូហ្វវែរ” មានន័យថារាល់កម្មវិធីសូហ្វវែរ ឬ app ទាំងអស់ (កម្មវិធី Android ឬ IOS) ដែលប្រើដោយ Eurobet ដើម្បីផ្តល់ជូន និង/ឬបើកដំណើរការសេវា និង/ឬដំណើរការកម្មវិធីអតិថិជន។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឈ. </span>
              “រង្វាន់” គឺជាចំនួនទឹកប្រាក់ ប្រាក់រង្វាន់ ឬរង្វាន់ដែលឈ្នះដោយម្ចាស់គណនី។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ញ. </span>
              “គណនីអសកម្ម” គឺជាគណនី Eurobet ដែលមិនមានកំណត់ត្រាចូល និង/ឬចេញពីគណនី លើសពីរយៈពេល ១២ ខែជាប់ៗគ្នា។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ដ. </span>
              រាល់ពាណិជ្ជសញ្ញា សេវាសញ្ញា និងពាណិជ្ជនាមទាំងអស់ រួមទាំងរូបភាព ក្រាហ្វិក អត្ថបទ គំនិត ឬវិធីសាស្រ្ត (តទៅនេះហៅជារួមថា “ទ្រព្យកម្មសិទ្ធិបញ្ញា”) ដែលមាននៅលើគេហទំព័រ កម្មវិធីអតិថិជន និងសម្ភារដែលមានក្នុងនោះ គឺជាកម្មសិទ្ធិផ្តាច់មុខរបស់ Eurobet និង/ឬអ្នកផ្គត់ផ្គង់ និងដៃគូរបស់ Eurobet។ ម្ចាស់គណនីមិនមានសិទ្ធិធ្វើអាជីវកម្ម ឬប្រើប្រាស់ទ្រព្យកម្មសិទ្ធិបញ្ញាឡើយ មិនថាក្នុងគោលបំណងអ្វីក៏ដោយ លើកលែងតែក្នុងវិសាលភាពមួយដែលច្បាប់អនុញ្ញាត។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>៦. </span>
              វិធានស្តីពីគណនី៖
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ក. </span>
              បុគ្គលនីមួយៗមិនអាចចូលរួមលេងល្បែងដាក់ប្រាក់បានទេ លុះត្រាតែគាត់ជាម្ចាស់គណនី។ ដើម្បីចុះឈ្មោះចូលលេង សាមីខ្លួនត្រូវចុះឈ្មោះដោយផ្ទាល់ ហើយដាក់ពាក្យសុំចុះឈ្មោះ។ ព័ត៌មានខាងក្រោមត្រូវតែផ្តល់ជូន៖
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ខ. </span>
              ថ្ងៃខែឆ្នាំកំណើត និងផ្តល់អត្តសញ្ញាណបណ្ណដែលមានសុពលភាព បង្ហាញថាអ្នកលេងមានអាយុលើសពី ១៨ (ដប់ប្រាំបី) ឆ្នាំ ឬមាននីតិភាពបានមានចែងក្នុងដែនយុត្តាធិការដែលអ្នកតាំងលំនៅដ្ឋាន (ឯកសារអត្តសញ្ញាណដែលត្រូវដាក់ជូន រួមមានច្បាប់ថតចម្លងនៃអត្តសញ្ញាណបណ្ណដែលមានសុពលភាព លិខិតឆ្លងដែន ឬបណ្ណបើកបរ)។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>គ. </span>
              នាមខ្លួន និងនាមត្រកូលរបស់អ្នកលេង
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឃ. </span>
              អាសយដ្ឋានអ៊ីម៉ែលត្រឹមត្រូវរបស់អ្នកលេង និង
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ង. </span>
              ឈ្មោះអ្នកប្រើប្រាស់ និងពាក្យសម្ងាត់
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>៧. </span>
              អ្នកដាក់ពាក្យសុំធ្វើជាម្ចាស់គណនី ធានាអះអាងថាខ្លួនមិនមានអាយុក្រោម ១៨ (ដប់ប្រាំបី) ឆ្នាំ។ អនីតិជនមិនអាចចុះឈ្មោះចូលលេង និងមិនអាចមានគណនី Eurobet បានទេ។ Eurobet រក្សាសិទ្ធិក្នុងការស្នើសុំ     ភស្តុតាងបន្ថែមបញ្ជាក់ពីអាយុ និងធ្វើការត្រួតពិនិត្យបន្ថែម ដើម្បីផ្ទៀងផ្ទាត់ព័ត៌មានដែលបានផ្តល់ជូន។ គណនី Eurobet អាចនឹងត្រូវផ្អាកជាបណ្តោះអាសន្នរហូតទាល់តែមានភស្តុតាងត្រឹមត្រូវ​បញ្ជាក់ពីអាយុ។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>៨. </span>
              រាល់ព័ត៌មានផ្ទាល់ខ្លួន និងសម្ងាត់ដែលអ្នកលេងផ្តល់ជូន Eurobet នៅតែរក្សាជាការសម្ងាត់ដោយ Eurobet និងប្រើប្រាស់សម្រាប់តែនៅលើប្រព័ន្ធ Eurobet ដើម្បីកែលម្អបទពិសោធន៍របស់អ្នកប្រើប្រាស់ប៉ុណ្ណោះ មិនមែនសម្រាប់គោលបំណងពាណិជ្ជកម្មនោះទេ។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>៩. </span>
              អ្នកដាក់ពាក្យសុំធ្វើជាម្ចាស់គណនី ធានាអះអាងបន្ថែមទៀតថា៖
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ក. </span>
              ខ្លួនជារូបវន្តបុគ្គល​ (នីតិបុគ្គលមិនអាចទទួលឱ្យធ្វើជាម្ចាស់គណនីនោះទេ)
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ខ. </span>
              មិនមែនជាអ្នកលេងអាជីពក្នុងវិស័យកីឡា ការប្រកួត ឬលីកណាមួយដែល Eurobet ដាក់ភ្នាល់នោះទេ។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>គ. </span>
              មិន​ត្រូវ​បានកំហិត​ដោយសារ​សមត្ថភាព​ផ្លូវច្បាប់មាន​កម្រិត។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឃ. </span>
              មិនធ្វើសកម្មភាពក្នុងនាមភាគីផ្សេងទៀត។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ង. </span>
              មិនត្រូវបានចាត់ទុកជាប្រភេទអ្នកលេងដែលចូលចិត្តបង្ករឿង និង/ឬមានឈ្មោះនៅលើបញ្ជី ឬ មូលដ្ឋានទិន្នន័យអ្នកលេងនៅក្រៅបញ្ជី (មិនថាដោយស្ម័គ្រចិត្ត ឬដោយមិនស្ម័គ្រចិត្ត)។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ច. </span>
              មិនដាក់ប្រាក់ដែលមានប្រភពមកពីសកម្មភាពឧក្រិដ្ឋកម្ម និង/ឬសកម្មភាពខុសច្បាប់ផ្សេងៗ។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឆ. </span>
              មិនដាក់ប្រាក់ដោយប្រើកាតដែលម្ចាស់គណនីមិនត្រូវបានអនុញ្ញាតឱ្យប្រើ និង/ឬប្រើកាតនៅក្នុងដែនយុត្តាធិការដែលហាមឃាត់ការភ្នាល់ និងការលេងល្បែង។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ជ. </span>
              មិនធ្វើសកម្មភាពឧក្រិដ្ឋកម្មដែលនាំឱ្យគណនី Eurobet ជាប់ពាក់ព័ន្ធដោយផ្ទាល់ ឬដោយប្រយោល។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឈ.​ </span>
              មិនមានគណនីសកម្មណាមួយនៅនីតិបុគ្គលផ្សេងទៀតដែលស្ថិតក្នុងសម្ព័ន្ធដូចគ្នានឹង Eurobet។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ញ. </span>
              មិនប្រើសេវា ប្រសិនបើវាខុសច្បាប់នៅក្នុងប្រទេសដែលខ្លួនតាំងនៅលំនៅដ្ឋាន ឬដាក់កំហិតលើខ្លួនមិនឱ្យបើកគណនីហ្គេម ឬទិញ ឬប្រើប្រាស់សេវារបស់ Eurobet និង/ឬបើមិនដូច្នេះទេ ចូលរួមលេងហ្គេមដែលបានផ្តល់ជូន។ ម្ចាស់គណនីទទួលខុសត្រូវក្នុងការធានាប្រើប្រាស់គេហទំព័រ និងសេវារបស់ Eurobet ស្របតាមច្បាប់។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ដ. </span>
              មិនប្រើពាក្យសម្តីប្រមាថមើលងាយ មិនយុត្តិធម៌ ឬមិនសមរម្យអំពីគេហទំព័រ ឬសេវា និងរក្សាធ្វើបច្ចុប្បន្នភាពព័ត៌មានលម្អិតអំពីគណនី Eurobet របស់ខ្លួនក្នុងលក្ខខណ្ឌដូចខាងក្រោម៖ នាមខ្លួន និងនាមត្រកូល ប្រទេសតាំងលំនៅដ្ឋាន អាសយដ្ឋានអ៊ីម៉ែល និងលេខទូរសព្ទដែលមានសុពលភាព។
            </Text>
            <Text ml={"10px"}>
              <span style={headList}>ឋ. </span>
              គណនីមួយអនុញ្ញាតសម្រាប់អ្នកលេងតែម្នាក់ប៉ុណ្ណោះ។ អ្នកលេងណាដែលត្រូវបានរកឃើញថាបំពានលើការផ្តល់ប្រូម៉ូសិន បើកគណនីច្រើន ឬគណនីក្លែងបន្លំ និងបំពានគោលការណ៍នៃការភ្នាល់នឹងត្រូវប្រឈមនឹងបិទគណនី និងដកហូតប្រាក់ដែលបានតម្កល់ដោយមិនចាំបាច់មានការជូនដំណឹងជាមុន។
            </Text>
          </Box>
          <Box>
            <Text>
              <span style={headList}>១០. </span>
              អ្នកដាក់ពាក្យសុំគណនី Eurobet ទទួលស្គាល់ និងយល់ព្រមតាម៖
            </Text>
          </Box>
          <Box>
            <Text ml={"10px"}>
              <span style={headList}>ក. </span>
              រាល់និយមន័យ និងបញ្ញត្តិទាំងអស់ដូចមានចែងក្នុងវិធានរបស់ Eurobet រួមទាំងវិធានបច្ចុប្បន្នរបស់ Eurobet ដែលបានចុះផ្សាយនៅលើគេហទំព័រ ក៏ដូចជាវិធានរបស់ Eurobet ដែលអាចនឹងត្រូវបានកែប្រែនាពេលអនាគត។
            </Text>
          </Box>
        </Flex>
      )}
     
    </Flex>
  );
};

const headList = {
  fontWeight: 700,
  marginRight: "10px",
};

export default TermsAndConditions;
