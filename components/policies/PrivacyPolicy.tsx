/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useTenancy } from "../../hook/TenancyProvider";
import { RootState } from "../../redux/store";

const PrivacyPolicy = () => {
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
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              1. Privacy
            </Text>
            <Text>
              Eurobet is committed to protecting the personal information of
              our players. This Privacy Policy lets you know what information we
              collect when you use our services, why we collect this
              information, and how we use the collected information.
            </Text>
            <Text>
              Please note that this Privacy Policy will be agreed between you
              and Eurobet. (‘We’, ‘Us’ or ‘Our’, as appropriate). This Privacy
              Policy is an integrated part of Eurobet’s Terms and Conditions.
              We may periodically make changes to this Privacy Policy and will
              notify you of these changes by posting the modified terms on our
              platforms. We recommend that you revisit this Privacy Policy
              regularly.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              2. Information Collected
            </Text>
            <Text>
              We consider information that may be used to identify an
              individual, including, but not limited to, first and last name,
              date of birth, home or other physical address, email address,
              phone number or other relevant information to be Personal
              Information (‘Personal Information’). You may be asked to provide
              Personal Information when you use our website, register for an
              account, or use our services. The Personal Information that we
              collect may include information such as contact information
              (including telephone number), shipping information, billing
              information, transaction history, website usage preferences, and
              feedback regarding the Services. This information is held by us on
              servers based in the various locations from time to time and
              elsewhere from time to time. When you interact with the services,
              our servers keep an activity log unique to you that collects
              certain administrative and traffic information including source IP
              address, time of access, date of access, web page(s) visited,
              language use, software crash reports and type of browser used.
              This information is essential for the provision and quality of our
              services. We do not collect Personal Information about you without
              your knowledge.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              3. Means Of Collecting And Processing Data
            </Text>
            <Text>
              We may automatically collect certain data as discussed above and
              receive Personal Information about you where you provide such
              information through the services or other forms of communications
              and interactions through the Eurobet site. We may also receive
              Personal Information from online vendors and service providers,
              and from customer lists lawfully acquired from third-party
              vendors. In addition, we may engage the services of third-party
              service providers to provide technical support on processing
              online transactions and maintaining accounts. We will have access
              to any information you provide to such vendors, service providers,
              and third-party e-commerce services, and we will use the Personal
              Information as set out in this Privacy Policy. We take steps to
              ensure that our arrangements with third-party service providers
              and online vendors protect your privacy.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              4. Information Use
            </Text>
            <Text>
              We use the Personal Information we collect from you to deliver our
              Services, to provide customer support, to undertake necessary
              security and identify verification checks, to process any of your
              online transactions, to assist your participation in third-party
              promotions, to meet certain business requirements, and for any
              other purpose related to the operation of the Services. As such,
              we may share your Personal Information with our carefully selected
              partners (including any other parties that have data-sharing
              arrangements with the latter).
            </Text>
            <Text>
              a. promotional offers and information regarding our products and
              services; and
            </Text>
            <Text>
              b. promotional offers and information regarding the products and
              services of our partners, in order to enlarge the range of
              provided products and improve our customer support service.
            </Text>
            <Text>
              From time to time, we may request information from you via surveys
              or contests. Participation in these surveys or contests is
              completely voluntary and you may choose whether or not to disclose
              information. Information requested may include contact information
              (such as name, correspondence address, and telephone number), and
              demographic information (such as zip code, postal code, or age).
              By accepting any contest prize or winnings, you consent to the use
              of your name for advertising and have elected not to receive
              promotional information. We may also use your Personal Information
              (including your email address and phone number) to provide you
              with information regarding our products, services, and promotions,
              including other gaming products (such as online poker, casino,
              betting, and backgammon) and products and services from third
              parties carefully selected by us.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              5. Certain Excluded Disclosures
            </Text>
            <Text>
              We may disclose your Personal Information if required to do so by
              law, or if we believe in good faith that such action is necessary
              to:
            </Text>
            <OrderedList type="a" pl={4}>
              <ListItem>
                comply with any legal process served on us, any of our sites, or
                its services, or in circumstances where we are under a
                substantially similar legal obligation;
              </ListItem>
              <ListItem>protect and defend our rights or property; or</ListItem>
              <ListItem>
                protect the personal safety of users of the services or the
                public. If, in our sole determination, you are found to have
                cheated or attempted to defraud us, the company, or any other
                user of the services in any way including but not limited to
                game manipulation or payment fraud, or if we suspect you of
                fraudulent payment, including use of stolen credit cards, or any
                other fraudulent activity (including any chargeback or other
                reversal of a payment) or prohibited transaction (including
                money laundering), we reserve the right to share this
                information (together with your identity) with other online
                gaming sites, banks, credit card companies, appropriate
                agencies, and relevant authorities.
              </ListItem>
              <ListItem>
                be used for the purpose of research on the prevention of
                addiction, data may be made anonymous and passed on to the
                respective institutions.
              </ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              6. Access
            </Text>
            <Text>
              You may opt-out of receiving any promotional communications either
              by choosing to opt out via your account settings available on our
              sites or services, or an email you receive from us, or at any time
              by sending an email, or by writing to us at Customer Support.
            </Text>
            <OrderedList type="a" pl={4}>
              <ListItem>
                want to confirm the accuracy of the Personal Information we have
                collected about you;
              </ListItem>
              <ListItem>
                would like to update your Personal Information; and/or
              </ListItem>
              <ListItem>
                have any complaint regarding our use of your Personal
                Information. If requested, we will:
              </ListItem>
              <ListItem>
                update any information you have provided to us, in case you
                prove the necessity for such changes; or
              </ListItem>
              <ListItem>
                mark any information to prohibit future use for marketing
                purposes. For the avoidance of doubt, nothing in this Privacy
                Policy shall prevent us from retaining your Personal Information
                where we are required to do so by law.
              </ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              7. Consent To Use Of Electronic Service Providers
            </Text>
            <Text>
              In order to play real money games on our services, you will be
              required to send money to and receive money from us. We may use
              third-party electronic payment systems to process such financial
              transactions. By accepting this Privacy Policy, you expressly
              consent to Personal Information necessary for the processing of
              transactions including, where necessary, the transfer of
              information outside of your country. We take steps to ensure that
              our arrangements with payment systems protect your privacy.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              8. Consent To Security Review
            </Text>
            <Text>
              We reserve the right to conduct a security review at any time to
              validate the registration data provided by you and to verify your
              use of the services and your financial transactions for potential
              breach of our Terms and Conditions and any applicable law. By
              using our services and thereby agreeing to our Terms and
              Conditions, you authorize us to use your Personal Information and
              to disclose the same to third parties for the purposes of
              validation the information you provide during your use of our
              services, including, when and where necessary, the transfer of
              information outside of your country. Security reviews may include
              but are not limited to ordering a credit report and/or otherwise
              verifying the information provided against third-party databases.
              Furthermore, to facilitate these security reviews, you agree to
              provide such information or documentation as we may request.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              9. Security
            </Text>
            <Text>
              We understand the importance of security and the techniques needed
              to secure information. We store all of the Personal Information we
              receive directly from you in an encrypted and password-protected
              database residing within our secure network behind
              state-of-the-art firewall software (our services support SSL). We
              also take measures to ensure our subsidiaries, agents, affiliates,
              and suppliers employ adequate security measures.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              10. Protection Of Minors
            </Text>
            <Text>
              Our services are not intended for or directed at persons under the
              age of eighteen (18) or below the age of majority under their
              respective jurisdiction. Any person who provides their information
              through any part of our services signifies that they are at least
              eighteen (18) years old or the age of majority. It is our policy
              to uncover attempts by minors to access our services which may
              involve having to initiate a security review. Once a minor has
              attempted to register or has submitted personal information
              through our services, such registration and/or submission shall be
              denied and extinguished from our records.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              11. International Transfers
            </Text>
            <Text>
              Personal Information collected on the services may be stored and
              processed in any country in which we and our affiliates,
              suppliers, or agents maintain facilities. By using our services,
              you expressly consent to any transfer of information outside your
              country (including countries that may not be assessed as having
              adequate privacy laws). Nonetheless, we take steps in ensuring
              that our agents, affiliates, and suppliers comply with our
              standards of privacy regardless of their location.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              12. Cookies
            </Text>
            <Text fontWeight={700}>Information placed on your device</Text>
            <Text>
              We may store information on devices where our services are
              accessed. This information is referred to as cookies, which are
              small text files that are stored on devices to record user
              preferences when online pages are visited. We also use Local
              Shared Objects or “flash cookies”. Flash cookies are similar to
              browser cookers where certain information is stored and remembered
              when the site is visited. Neither cookies nor flash cookies may be
              used to access or use other information on your computer. We only
              use these methods to track your use of our services. Cookies help
              us monitor traffic to the site, improve our services and make it
              easier and/or more relevant for your use. We use flash cookies and
              third-party cookies to help us show you more relevant and
              desirable advertisements.
            </Text>
            <Text fontWeight={700}>Strictly necessary cookies:</Text>
            <Text>
              Strictly necessary cookies are essential to allow a user to move
              around a website and use its features, such as accessing secure
              areas of the website or making financial transactions. Without
              these cookies, we would not be able to make our websites work
              efficiently.
            </Text>
            <Text fontWeight={700}>During the registration process:</Text>
            <Text>
              Cookies store information collected during registration and allow
              the system to recognize customers and appropriately provide the
              services needed. We may also use this data to better understand
              your interests while online and to enhance your visit to our
              platforms.
            </Text>
            <Text fontWeight={700}>On our website:</Text>
            <Text>
              For visitors to our website, we use cookies to collect
              information. Our servers use three (3) different types of cookies:
            </Text>
            <Text>
              A ‘session-based’ cookie: This type of cookie is only allocated to
              your computer for the duration of your visit to our website. A
              session-based cookie helps you move around our website faster and,
              if you’re a registered customer, it allows us to give you
              information that is more relevant to you. This cookie
              automatically expires when you close your browser.
            </Text>
            <Text>
              A ‘persistent’ cookie: This type of cookie will remain on your
              computer for a period of time set for each cookie. Flash cookies
              are also persistent.
            </Text>
            <Text>
              ‘Analytical’ cookies: This type of cookie allows us to recognize
              and count the number of visitors to our site and see how visitors
              use our services. These help us improve the way our sites work,
              for example, by ensuring you can find what you are looking for
              easily. You have the ability to accept or decline cookies. Most
              web browsers automatically accept cookies, but, if you prefer, you
              may usually modify your browser setting to decline cookies. The
              Help menu on the menu bar of most browsers will tell you how to
              prevent your browser from accepting new cookies, how to have the
              browser notify you when you receive a new cookie, and how to
              disable cookies altogether.
            </Text>
            <Text fontWeight={700}>Flash cookies:</Text>
            <Text>
              You may modify your Flash Player settings to prevent the use of
              flash cookies. The Settings Manager of your Flash Player allows
              you to manage your preferences. To disallow flash cookies from all
              third-party content, go to the ‘Global Storage Settings’ panel of
              the Settings Manager and de-select the checkbox labeled ‘Allow
              third party flash content to store information on your computer’
              and close the Settings Manager. Alternatively, you may also adjust
              your settings for specific websites you visit through the ‘Website
              Storage Settings’ panel which is also found in the Settings
              Manager.
            </Text>
            <Text>
              If you are using an old version of the Flash Player or older web
              browser, the Settings Manager may not be available to you. We
              recommend that you ensure that you refresh your Flash Player and
              browser to the latest available versions. If you choose to decline
              cookies, you may not be able to experience all of the interactive
              features on our sites.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              13. Third-Party Practices
            </Text>
            <Text>
              We cannot ensure the protection of any information that you
              provide to a third-party online site that links to or from the
              services or any information collected by any third party
              administering our affiliate program (if applicable) or any other
              program since these third-party online sites are owned and
              operated independently. Any information collected by these third
              parties is governed by the privacy policy, if any, of such third
              party.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              14. Legal Disclaimer
            </Text>
            <Text>
              The Services operate ‘AS-IS’ and ‘AS-AVAILABLE’ without liability
              of any kind. We are not responsible for events beyond our direct
              control. Due to the complex and ever-changing nature of our
              technology and business, we cannot guarantee nor do we claim that
              there will be error-free performance regarding the privacy of your
              Personal Information, and we will not be liable for any indirect,
              incidental, consequential or punitive damages relating to the use
              or release of said Personal Information.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              15. Consent To Privacy Policy
            </Text>
            <Text>
              Your use of our services constitutes an agreement to our Privacy
              Policy.
            </Text>
            <Text>
              This is our entire and exclusive Privacy Policy and it supersedes
              any earlier version. This Privacy Policy should be read in
              conjunction with our Terms and Conditions and any additional
              applicable terms posted on our platforms. We may periodically make
              changes to this Privacy Policy and will notify you of these
              changes by posting the modified terms on our platforms. Your
              continued use of our services subsequent to any changes to this
              Privacy Policy constitutes your acceptance of the same. We
              recommend that you revisit this Privacy Policy regularly.
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              16. Other Websites
            </Text>
            <Text>
              Our website may contain links to other web sites, which are
              outside our control and are not covered by this Privacy Policy. If
              you access other sites using the links provided, the operators of
              these sites may collect information from you, which will be used
              by them in accordance with their privacy policy, which may differ
              from ours. We are not responsible for any information collected by
              such sites. Solely the operators of these websites shall be
              responsible for their functionality or possible errors on the
              linked sites.
            </Text>
          </Box>
        </Flex>
      )}
      {language === "MY" &&  (
        <Flex
          flexDir={"column"}
          color={"rgba(255,255,255, 0.7)"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          lineHeight={2}
        >
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၁။ ကိုယ်ရေးကိုယ်တာ အချက်အလက်များ
            </Text>
            <Text>
              388 Games သည် ကစားသမားများ၏ ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
              ကာကွယ်ထိန်းသိမ်းပေးမည်ဟု ကတိပြုပါမည်။ ဤကိုယ်ရေးကိုယ်တာမူဝါဒသည်
              စုဆောင်းထားသော ကစားသမားများ၏ အချက်အလက်များ၊ စုဆောင်းရသည့်
              အကြောင်းအရင်းနှင့် မည်သို့မည်ပုံအသုံးပြုမည်ကို သိစေရန်
              ရည်ရွယ်ပါသည်။
            </Text>
            <Text>
              ဤကိုယ်ရေးကိုယ်တာမူဝါဒသည် 388 Games ၏ စည်းမျဉ်းသတ်မှတ်ချက်
              အစိတ်အပိုင်းတစ်ခုဖြစ်သည့်အတွက် ကစားသမားများအနေနှင့် သဘောတူရမည်
              ဖြစ်ပါသည်။ အခါအားလျော်စွာ ပြောင်းလဲသတ်မှတ်သော မူဝါဒများအား
              သက်ဆိုင်ရာ ကြေညာချက်ထုတ်ပြန်သည့်နေရာများမှ အသိပေးသွားမည်ဖြစ်ပါသည်။
              ထို့ကြောင့် ကျွန်ုပ်တို့၏ ကိုယ်ရေးကိုယ်တာမူဝါဒကို ပုံမှန်ဖတ်ရှုရန်
              အကြံပြုလိုပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၂။ စုဆောင်းထားသော အချက်အလက်များ
            </Text>
            <Text>
              ကျွန်ုပ်တို့သည် ကစားသမားများ၏ နာမည်အပြည့်အစုံ၊ မွေးနေ့၊
              နေရပ်လိပ်စာ၊ အီးမေးလ်၊ ဖုန်းနံပါတ်နှင့် သက်ဆိုင်ရာ
              အချက်အလက်များကို ကိုယ်ရေးသတင်းအချက်အလက်များအနေနှင့်
              သတ်မှတ်ထားပါသည်။ ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို အသုံးပြုရန်နှင့်
              စာရင်းပေးသွင်းရန်အတွက် အဆိုပါအချက်အလက်များကို ဖြည့်သွင်းရမည်
              ဖြစ်ပါသည်။ ကျွန်ုပ်တို့စုဆောင်းသည့် ကိုယ်ရေးအချက်အလက်များတွင်
              ဆက်သွယ်ရန်လိပ်စာ (ဖုန်းနံပါတ်)၊ ပို့ဆောင်ရန် လိပ်စာ၊
              ဘေလ်ပေးဆောင်ခြင်းအချက်အလက်၊ ငွေလွှဲမှတ်တမ်း၊ ဦးစားပေးအသုံးပြုသည့်
              ဝက်ဘ်ဆိုဒ်များ၊ ဝန်ဆောင်မှုတုံ့ပြန်ချက် စသည်တို့ ပါဝင်ပါသည်။
              ဤအချက်အလက်များအား နိုင်ငံအနှံ့ရှိ ဆာဗာများမှတစ်ဆင့်
              အချိန်နှင့်တပြေးညီ ကိုင်တွယ်သွားမည် ဖြစ်ပါသည်။ ဝန်ဆောင်မှုကို
              အသုံးပြုသည့်အခါ ကစားသမားများ၏ အိုင်ပီလိပ်စာ၊ ဝင်ရောက်သည့်အချိန်၊
              ဝင်ရောက်သည့်ရက်စွဲ၊ ကြည့်ရှုခဲ့သော ဝက်ဘ်စာမျက်နှာများ၊
              အသုံးပြုသည့် ဘာသာစကား၊ ဆော့ဖ်ဝဲ အစီရင်ခံစာ၊ အသုံးပြုသည့် ဘရောက်ဇာ
              စသည်တို့ကို သိမ်းဆည်းထားမည် ဖြစ်ပါသည်။ ထိုအချက်အလက်များသည်
              ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုအရည်အသွေးအတွက် မရှိမဖြစ်လိုအပ်ပါသည်။
              သို့ရာတွင် ကစားသမားများ၏ အချက်အလက်များအား အသိမပေးဘဲ သိမ်းဆည်းမည်
              မဟုတ်ပါ။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၃။ ဒေတာစုဆောင်းခြင်းနှင့် စီမံဆောင်ရွက်ခြင်း နည်းလမ်းများ
            </Text>
            <Text>
              388 Games ကို အသုံးပြုသည်နှင့်တစ်ပြိုင်နက် ကစားသမားများ၏
              ကိုယ်ရေးအချက်အလက်များအား အထက်တွင်ဖော်ပြခဲ့သည့်အတိုင်း
              ကျွန်ုပ်တို့၏ သက်ဆိုင်ရာ ဆာဗာများမှ အလိုအလျောက်စုဆောင်းထားမည်
              ဖြစ်ပါသည်။ ကစားသမားများ၏ ကိုယ်ရေးအချက်အလက်များကို
              တရားဝင်သတ်မှတ်ထားသည်
              သက်ဆိုင်ရာအွန်လိုင်းရောင်းချမှုနေရာများမှတစ်ဆင့်လည်း
              ရရှိနိုင်ပါသည်။ ထို့အပြင် ကျွန်ုပ်တို့သည်
              အွန်လိုင်းငွေပေးငွေယူလုပ်ဆောင်ခြင်းနှင့်
              အကောင့်ထိန်းသိမ်းခြင်းဆိုင်ရာ နည်းပညာပံ့ပိုးမှုပေးရန်အတွက်
              ပြင်ပမှဝန်ဆောင်မှုပေးသူများ၏ ဝန်ဆောင်မှုများကို
              ချိတ်ဆက်နိုင်ပါသည်။ ကျွန်ုပ်တို့သည် ထိုကဲ့သို့သော
              ဝန်ဆောင်မှုပေးသူများနှင့် ပြင်ပကုမ္ပဏီ အီးကောမာ့စ်
              ဝန်ဆောင်မှုများကို ပေးဆောင်ရန် လိုအပ်သည့်အချက်အလက်များကို
              ဝင်ရောက်ကြည့်ရှုနိုင်မည်ဖြစ်ပြီး ဤကိုယ်ရေးကိုယ်တာမူဝါဒတွင်
              ဖော်ပြထားသည့်အတိုင်းသာ ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
              အသုံးပြုပါမည်။ ကျွန်ုပ်တို့သည် ပြင်ပဝန်ဆောင်မှုပေးသူများနှင့်
              စပ်လျဉ်း၍ သင့်ကိုယ်ရေးကိုယ်တာအချက်အလက်များ လုံခြုံမှုကို
              ကာကွယ်ထိန်းသိမ်းပေးကြောင်း အာမခံပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၄။ သတင်းအချက်အလက်များအသုံးပြုခြင်း
            </Text>
            <Text>
              ကျွန်ုပ်တို့သည် သင့်ထံမှ စုဆောင်းထားသည့်အချက်အလက်များကို
              ဝန်ဆောင်မှုပေးရန်၊ လိုအပ်သော အကူအညီများပေးရန်၊
              လိုအပ်သောလုံခြုံရေးကိုဆောင်ရွက်ရန်နှင့်
              အတည်ပြုစစ်ဆေးမှုများကိုဖော်ထုတ်ရန်၊
              အွန်လိုင်းငွေလွှဲမှုများလုပ်ဆောင်ရန်၊
              ပြင်ပကုမ္ပဏီပရိုမိုးရှင်းများတွင် သင်ပါဝင်နိုင်ရန်၊
              အခြားသောဝန်ဆောင်မှုများနှင့် စပ်လျဉ်းသော စီမံမှုများအတွက်သာ
              အသုံးပြုပါမည်။ သင်၏ အချက်အလက်များကို ကျွန်ုပ်တို့
              စနစ်တကျရွေးချယ်ထားသော ပါတနာများထံသာ ဝေမျှသွားမည်ဖြစ်ပါသည်။ သင်၏
              ကိုယ်ရေးအချက်အလက်များကို
            </Text>
            <Text>
              (က) ကျွန်ုပ်တို့၏ ပရိုမိုးရှင်း ကမ်းလှမ်းချက်များနှင့် ပတ်သက်သည့်
              အချက်အလက်များ ဝေမျှရန်
            </Text>
            <Text>
              (ခ) ပိုမိုကောင်းမွန်သည့်ဝန်ဆောင်မှုများနှင့်
              ထုတ်ကုန်များတိုးမြှင့်ရန် ကျွန်ုပ်တို့ ပါတနာများ၏
              ထုတ်ကုန်များနှင့် ဝန်ဆောင်မှုများနှင့်ပတ်သက်၍
              ပရိုမိုးရှင်းကမ်းလှမ်းမှုများနှင့် အချက်အလက်များဝေမျှရန်
              စသည့်အခြေအနေများတွင် အသုံးပြုသွားမည် ဖြစ်ပါသည်။
            </Text>
            <Text>
              အခါအားလျော်စွာ ကျွန်ုပ်တို့သည် စစ်တမ်းများ သို့မဟုတ်
              ပြိုင်ပွဲများမှတစ်ဆင့် သင့်ထံမှ အချက်အလက်များကို
              တောင်းဆိုနိုင်ပါသည်။ ဤပြိုင်ပွဲများတွင် ပါဝင်ခြင်း၊ မပါဝင်ခြင်းမှာ
              သင်၏ ဆုံးဖြတ်ချက်သာဖြစ်ပြီး သတင်းအချက်အလက်များ ဖော်ပြခြင်း၊
              မဖော်ပြခြင်းကိုလည်း သင်ကိုယ်တိုင် ရွေးချယ်နိုင်ပါသည်။
              တောင်းဆိုမည့် အချက်အလက်များတွင် အမည်၊ လိပ်စာ၊ ဖုန်းနံပါတ်၊
              စာတိုက်အမှတ်၊ အသက် စသည်တို့ ပါဝင်ပါသည်။ ပြိုင်ပွဲတွင် ရရှိသည့်ဆု
              သို့မဟုတ် အနိုင်ရမှုများကို လက်ခံခြင်းဖြင့် သင်သည်
              ကြော်ငြာရန်အတွက် သင့်အမည်ကို အသုံးပြုရန် သဘောတူပြီး
              ပရိုမိုးရှင်းအချက်အလက်များကို လက်ခံရယူခြင်းမပြုရန်
              ရွေးချယ်ထားသည်ဟု သတ်မှတ်ပါသည်။ ကျွန်ုပ်တို့သည် ထုတ်ကုန်များ၊
              ဝန်ဆောင်မှုများနှင့် အခြားသောဂိမ်းများ (အွန်လိုင်းကာစီနို၊
              ဖဲဂိမ်း၊ အန်စာတုံး စသည်) တို့အပြင်
              ကျွန်ုပ်တို့စနစ်တကျရွေးချယ်ထားသော တွဲဖက်ပါတနာများ၏ ထုတ်ကုန်နှင့်
              ဝန်ဆောင်မှုများအတွက် သင်၏ ကိုယ်ရေးအချက်အလက်များ (အီးမေးလ်လိပ်စာ၊
              ဖုန်းနံပါတ်) စသည်တို့ကို အသုံးပြုမည် ဖြစ်ပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၅။ မပါဝင်သည့် အချို့သောထုတ်ဖော်ချက်များ
            </Text>
            <Text>
              သင်၏ အချက်အလက်များကို ဥပဒေအရ ဖော်ထုတ်ရန်လိုအပ်ပါက
              ထုတ်ဖော်သွားမည်ဖြစ်ပါသည်။ အကယ်၍ ထိုသို့လုပ်ဆောင်ရန်လိုအပ်လာပါက
            </Text>
            <OrderedList type="a" pl={4}>
              <ListItem>
                (က) ကျွန်ုပ်တို့၏ ဆိုက်တွင်ဖော်ပြထားသည့်
                ဥပဒေရေးရာလုပ်ငန်းစဉ်များ၊ ၎င်းတို့၏ ဝန်ဆောင်မှုများ၊ သို့မဟုတ်
                အလားတူအခြေအနေများတွင် လိုက်နာဆောင်ရွက်ပေးပါ။
              </ListItem>
              <ListItem>
                (ခ) ကျွန်ုပ်တို့၏ အခွင့်အရေးနှင့် ပိုင်ဆိုင်မှုများကို
                ကာကွယ်ထိန်းသိမ်းပေးပါ။
              </ListItem>
              <ListItem>
                (ဂ) ဝန်ဆောင်မှုအသုံးပြုသူများ၏ လုံခြုံရေးကို ထိန်းသိမ်းပေးပါ။
                အကယ်၍ ကျွန်ုပ်တို့၏ ဆုံးဖြတ်ချက်အရ ပွဲစဉ်အတွင်း
                လိမ်လည်လှည့်ဖျားခြင်းကို တွေ့ရှိပါက၊ သို့မဟုတ် ပွဲစဉ်အတွင်း
                ငွေပေးချေမှုတွင် အကန့်အသတ်မရှိလိမ်လည်ထားသည်ကို တွေ့ရှိပါက၊
                တရားမဝင် ငွေလွှဲမှုများ ပြုလုပ်ထားသည်ကို တွေ့ရှိပါက သင်၏
                ကိုယ်ရေးအချက်အလက်များအား အခြားသော ဂိမ်းဆိုက်များ၊ ဘဏ်များ၊
                အကြွေးဝယ်ကတ်ကုမ္ပဏီများနှင့် သင့်လျော်သော အေဂျင်စီများထံသို့
                ပေးပို့သွားမည်ဖြစ်ပါသည်။
              </ListItem>
              <ListItem>
                (ဃ) ကျွန်ုပ်တို့သည် စွဲလမ်းမှု တားဆီးကာကွယ်ရေးဆိုင်ရာ
                သုတေသနပြုလုပ်ရန် ရည်ရွယ်ချက်ဖြင့် အချက်အလက်များကို အမည်ဝှက်ဖြင့်
                သက်ဆိုင်ရာ အဖွဲ့အစည်းများထံ ပေးပို့နိုင်ပါသည်။
              </ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၆။ ကျွန်ုပ်တို့ဘက်က ပေးပို့သည့် ပရိုမိုးရှင်းဆိုင်ရာ
              ဆက်သွယ်မှုများအား မရရှိလိုပါက ကျွန်ုပ်တို့၏ ဝဘ်ဆိုက်များ သို့မဟုတ်
              ဝန်ဆောင်မှုများတွင် ရရှိနိုင်သော သင့်အကောင့်ဆက်တင်များမှတစ်ဆင့်၊
              သို့မဟုတ် ကျွန်ုပ်တို့ထံမှ သင်လက်ခံရရှိသည့် အီးမေးလ်များမှတစ်ဆင့်၊
              သို့မဟုတ် ကစားသမားအကူအညီများမှတစ်ဆင့် မေးလ်ပေးပို့၍
              ရပ်တန့်နိုင်ပါသည်။ ထို့အပြင် -
            </Text>

            <OrderedList type="a" pl={4}>
              <ListItem>
                (က) ကျွန်ုပ်တို့ စုဆောင်းထားသည့် သင်၏
                ကိုယ်ရေးအချက်အလက်များအကြောင်း အတည်ပြုလိုပါက
              </ListItem>
              <ListItem>
                (ခ) သင်၏ ကိုယ်ရေးအချက်အလက်များကို ပြုပြင်လိုပါက
              </ListItem>
              <ListItem>
                (ဂ) သင်၏ ကိုယ်ရေးအချက်အလက်များ အသုံးပြုခြင်းနှင့်စပ်လျဉ်း၍
                အငြင်းပွါးစရာတစ်စုံတရာရှိလာပါက ကျွန်ုပ်တို့ထံသို့
                ဆက်သွယ်နိုင်ပါသည်။ အကယ်၍ ထိုကဲ့သို့ တောင်းဆိုမှုများရှိလာပါက
              </ListItem>
              <ListItem>
                (က) သင်၏ ကိုယ်ရေးအချက်အလက်များ ပြောင်းလဲရန်လိုအပ်ကြောင်း
                သက်သေပြနိုင်ပါက ကျွန်ုပ်တို့ထံ သင်ထပ်မံပေးပို့သော
                အချက်အလက်များကို ပြုပြင်ပေးမည် ဖြစ်ပါသည်။
              </ListItem>
              <ListItem>
                (ခ) စျေးကွက်ရှာဖွေရေးရည်ရွယ်ချက်များအတွက်
                နောင်တစ်ချိန်တွင်အသုံးပြုမှုကို တားမြစ်ရန်
                မည်သည့်အချက်အလက်ကိုမဆို အမှတ်အသားပြုလုပ်ပါ။ သံသယများ
                ကင်းရှင်းစေရန်အတွက် ဥပဒေအရ လုပ်ဆောင်ရန်လိုအပ်လာပါက သင်၏
                ကိုယ်ရေးအချက်အလက်များအား ကျွန်ုပ်တို့ဘက်မှ
                ကိုယ်ရေးကိုယ်တာမူဝါဒအရ ထိန်းသိမ်းထားမည် မဟုတ်ပါ။
              </ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၇။ အီလက်ထရွန်းနစ် ဝန်ဆောင်မှုပေးသူများ အသုံးပြုရန် သဘောတူညီချက်
            </Text>
            <Text>
              ကျွန်ုပ်တို့၏ ဂိမ်းတွင် ငွေအစစ်အမှန်များနှင့် ကစားနိုင်ရန်အတွက်
              ကျွန်ုပ်တို့ထံသို့ ငွေလွှဲပေးရန်၊ ကျွန်ုပ်တို့ထံမှ ငွေထုတ်ယူရန်
              လိုအပ်ပါသည်။ ထိုကဲ့သို့သော ငွေကြေးလွှဲပြောင်းမှုများကို
              လုပ်ဆောင်ရန် ပြင်ပမှ အီလက်ထရွန်နစ် ငွေပေးချေမှုစနစ်များကို
              ကျွန်ုပ်တို့ အသုံးပြုနိုင်ပါသည်။ ဤကိုယ်ရေးကိုယ်တာမူဝါဒကို
              လက်ခံခြင်းဖြင့် သင်သည် လိုအပ်ပါက သင့်နိုင်ငံပြင်ပတွင်
              အချက်အလက်လွှဲပြောင်းခြင်းအပါအဝင် ငွေပေးငွေယူလုပ်ဆောင်ခြင်းအတွက်
              လိုအပ်သော ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
              ရှင်းရှင်းလင်းလင်းသဘောတူပါသည်။ ငွေပေးချေမှုစနစ်များဖြင့်
              ကျွန်ုပ်တို့၏အစီအမံများသည် သင့်ကိုယ်ရေးကိုယ်တာလုံခြုံမှုကို
              ကာကွယ်ပေးနိုင်သည်ဟု အာမခံပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၈။ လုံခြုံရေးပြန်လည်သုံးသပ်ရန် သဘောတူခွင့်ပြုချက်
            </Text>
            <Text>
              ကျွန်ုပ်တို့သည် သင်စာရင်းပေးသွင်းထားသည့် ဒေတာများ
              မှန်ကန်ကြောင်းနှင့် ကျွန်ုပ်တို့၏ စည်းမျဥ်းစည်းကမ်းများနှင့်
              သက်ဆိုင်သည့်ဥပဒေများကို ချိုးဖောက်နိုင်ဖွယ်ရှိသည့်
              အခြေအနေများအတွက် သင်၏ဘဏ္ဍာရေးဆိုင်ရာ လွှဲပြောင်းမှုများကို
              အတည်ပြုရန် အချိန်မရွေး လုံခြုံရေးပြန်လည်သုံးသပ်မှုပြုလုပ်ခွင့်
              ရှိပါသည်။ ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများကိုအသုံးပြုပြီး
              ကျွန်ုပ်တို့၏စည်းမျဥ်းစည်းကမ်းများကိုသဘောတူခြင်းဖြင့်
              သင်၏ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို ကျွန်ုပ်တို့အား မည်သည့်အချိန်၊
              နေရာတွင်မဆို အသုံးပြုခွင့်ပေးကြောင်း သဘောတူပါသည်။
              လုံခြုံရေးသုံးသပ်ချက်များသည် ခရက်ဒစ်အစီရင်ခံစာကို မှာယူခြင်းနှင့်
              ပြင်ပကုမ္ပဏီဒေတာဘေ့စ်များပေါ်တွင် ပေးထားသည့် အချက်အလက်များကို
              စစ်ဆေးခြင်းတွင် အကန့်အသတ်မရှိ ပါဝင်နိုင်သည်။ ထို့အပြင်
              ဤလုံခြုံရေးသုံးသပ်ချက်များကို လွယ်ကူချောမွေ့စေရန်
              ကျွန်ုပ်တို့တောင်းဆိုနိုင်သည်အတိုင်း အဆိုပါအချက်အလက်များ သို့မဟုတ်
              စာရွက်စာတမ်းများကို ပေးဆောင်ရန် သဘောတူပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၉။ လုံခြုံရေး
            </Text>
            <Text>
              ကျွန်ုပ်တို့သည် လုံခြုံစိတ်ချရသော သတင်းအချက်အလက်များ
              ပေးနိုင်ရန်အတွက် လုံခြုံရေးနှင့် နည်းပညာများ၏ အရေးပါမှုကို
              နားလည်ပါသည်။ ကျွန်ုပ်တို့သည် သင့်ထံမှ တိုက်ရိုက်ရရှိသည့်
              ကိုယ်ရေးကိုယ်တာ အချက်အလက်အားလုံးကို လျှို့ဝှက်နံပါတ်ဖြင့်
              ကာကွယ်ထားသော ဒေတာဘေ့စ်ရှိ ခေတ်မီသော ဖိုင်းယားဝေါလ်ဆော့ဖ်ဝဲလ်တွင်
              သိမ်းဆည်းထားပါသည်။ ကျွန်ုပ်တို့၏ လုပ်ငန်းခွဲများ၊ အေးဂျင့်များ၊
              တွဲဖက်လုပ်ကိုင်သူများ နှင့် ထောက်ပံ့သူများအတွက်လည်း လုံလောက်သော
              အစီအမံများ အသုံးပြုဆောင်ရွက်ထားပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၁၀။ အရွယ်မရောက်သေးသူများကို အကာအကွယ်ပေးခြင်း
            </Text>
            <Text>
              ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများသည် အသက်တစ်ဆယ့်ရှစ်နှစ်အောက်
              အရွယ်မရောက်သေးသူများအတွက် ရည်ရွယ်ထားခြင်းမဟုတ်ပါ။ ကျွန်ုပ်တို့၏
              မူဝါဒအရ အသက်တစ်ဆယ့်ရှစ်နှစ် ပြည့်ပြီးသူများကိုသာ
              ဝန်ဆောင်မှုပေးမည်ဖြစ်ပြီး အသက်မပြည့်သူများအား လုံခြုံရေးအရ
              စိစစ်သွားမည် ဖြစ်ပါသည်။ စာရင်းပေးသွင်းထားသူများတွင်
              အသက်မပြည့်သူများအား စစ်ဆေးတွေ့ရှိပါက ကျွန်ုပ်တို့၏ မှတ်တမ်းများမှ
              ထုတ်ပယ်သွားမည် ဖြစ်ပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၁၁။ နိုင်ငံတကာ လွှဲပြောင်းမှုများ
            </Text>
            <Text>
              ဝန်ဆောင်မှုများပေါ်တွင် စုဆောင်းရရှိထားသော
              ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို ကျွန်ုပ်တို့နှင့်
              ကျွန်ုပ်တို့၏လုပ်ငန်းခွဲများ၊ ထောက်ပံ့သူများ၊ သို့မဟုတ်
              အေးဂျင့်များရှိသည့် မည်သည့်နိုင်ငံတွင်မဆို သိမ်းဆည်းပြီး
              စီမံဆောင်ရွက်နိုင်ပါသည်။
              ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများကိုအသုံးပြုခြင်းဖြင့်၊ သင်သည်
              သင့်နိုင်ငံပြင်ပ (ကိုယ်ရေးကိုယ်တာ ဥပဒေ မရှိသော
              နိုင်ငံများမပါဝင်ပါ) တွင် သတင်းအချက်အလက်လွှဲပြောင်းမှုများအား
              အတိအလင်းသဘောတူပါသည်။ မည်သို့ပင်ဆိုစေကာမူ၊ ကျွန်ုပ်တို့သည်
              ကျွန်ုပ်တို့၏အေးဂျင့်များ၊ တွဲဖက်လုပ်ကိုင်သူများနှင့်
              ထောက်ပံ့သူများသည် ၎င်းတို့၏တည်နေရာမခွဲခြားဘဲ
              ကျွန်ုပ်တို့၏ကိုယ်ရေးကိုယ်တာစံနှုန်းများကို
              လိုက်နာကြောင်းသေချာစေရန်အတွက် လုပ်ဆောင်ထားပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၁၂။ ကွတ်ကီး
            </Text>
            <Text fontWeight={700}> သင့်စက်ပေါ်တွင် တင်ထားသော အချက်အလက်</Text>
            <Text>
              ကျွန်ုပ်တို့သည် ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများကို
              ဝင်ရောက်အသုံးပြုသည့် စက်များတွင် အချက်အလက်များကို
              သိမ်းဆည်းနိုင်ပါသည်။ ဤသည်မှာ
              အွန်လိုင်းစာမျက်နှာများကိုလည်ပတ်သည့်အခါ
              အသုံးပြုသူနှစ်သက်မှုများကို မှတ်တမ်းတင်ရန်အတွက် စက်များတွင်
              သိမ်းဆည်းထားသည့် သေးငယ်သောစာသားဖိုင်များကို ကွတ်ကီးများအဖြစ်
              ရည်ညွှန်းခြင်းဖြစ်ပါသည်။ သက်ဆိုင်ရာလုပ်ငန်းစဉ်အတွင်းမျှဝေသည့်
              အရာများကို ဖလက်ရှ်ကွတ်ကီးဟု သုံးနှုန်းပါသည်။ ဖလက်ရှ်ကွတ်ကီးကို
              အချို့သော အချက်အလက်များသိမ်းဆည်းရန်နှင့် လည်ပတ်ခဲ့သော ဆိုက်များအား
              မှတ်သားရန် အသုံးပြုပါသည်။
            </Text>
            <Text fontWeight={700}>
              သင့်ကွန်ပြူတာပေါ်ရှိ အခြားအချက်အလက်များကို ရယူအသုံးပြုရန်
              ကွတ်ကီးများနှင့်{" "}
            </Text>
            <Text>
              ဖလက်ရ်ှကွတ်ကီးများကို အသုံးမပြုပါ။
              ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများအတွင်း သင့်အသုံးပြုမှုကို သိနိုင်ရန်သာ
              အသုံးပြုပါသည်။ ကွတ်ကီးသည် ကျွန်ုပ်တို့အား ဝဘ်ဆိုက်သို့ အသွားအလာ
              စောင့်ကြည့်ရန်၊ ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို မြှင့်တင်ပေးပြီး
              သင့်အသုံးပြုမှု လွယ်ကူစေရန် ကူညီပေးပါသည်။ ကျွန်ုပ်တို့သည် သင်နှင့်
              ပိုမိုသက်ဆိုင်ပြီး နှစ်လိုဖွယ်ရှိသော ကြော်ငြာများကို ပြသနိုင်ရန်သာ
              ဖလက်ရှ်ကွတ်ကီးနှင့် အခြားသောကွတ်ကီး များကို အသုံးပြုပါသည်။
            </Text>
            <Text fontWeight={700}>မဖြစ်မနေလိုအပ်သော ကွတ်ကီးများ</Text>
            <Text>
              ဝဘ်ဆိုက်၏ လုံခြုံသောနေရာများကို ဝင်ရောက်ကြည့်ရှုခြင်း သို့မဟုတ်
              ငွေကြေးလွှဲပြောင်းမှုများ ပြုလုပ်ခြင်းကဲ့သို့သော
              ကိစ္စရပ်များပြုလုပ်နိုင်ရန် ကွတ်ကီးများသည် မဖြစ်မနေလိုအပ်ပါသည်။
              ဤကွတ်ကီးများမရှိလျှင် ကျွန်ုပ်တို့သည် ဝဘ်ဆိုဒ်များကို
              ထိရောက်စွာလုပ်ဆောင်နိုင်မည်မဟုတ်ပါ။
            </Text>
            <Text fontWeight={700}>မှတ်ပုံတင်ခြင်းလုပ်ငန်းစဉ်အတွင်း</Text>
            <Text>
              မှတ်ပုံတင်စဉ်အတွင်း စုဆောင်းရရှိထားသော အချက်အလက်များကို ကွတ်ကီးက
              သိမ်းဆည်းထားပြီး သုံးစွဲသူများကို မှတ်သားထားကာ လိုအပ်သော
              ဝန်ဆောင်မှုများကို သင့်လျော်စွာ ပေးဆောင်ပါသည်။
              အွန်လိုင်းပေါ်ရှိနေစဉ် သင်၏စိတ်ဝင်စားမှုများကို
              ပိုမိုနားလည်ရန်နှင့် ကျွန်ုပ်တို့၏ပလက်ဖောင်းများသို့
              သင်၏လည်ပတ်မှုကို မြှင့်တင်ရန်အတွက်လည်း ဤဒေတာများကို
              အသုံးပြုနိုင်ပါသည်။
            </Text>
            <Text>
              ကျွန်ုပ်တို့၏ဝဘ်ဆိုဒ်တွင်-
              ကျွန်ုပ်တို့၏ဝဘ်ဆိုဒ်သို့လာရောက်လည်ပတ်သူများအတွက်
              အချက်အလက်စုဆောင်းရန် ကွတ်ကီးများကို အသုံးပြုပါသည်။
              ကျွန်ုပ်တို့၏ဆာဗာများတွင် ကွတ်ကီးအမျိုးအစား (၃)မျိုးသုံးပါသည်။
            </Text>

            <Text>
              {'ဆက်ရှင်-အခြေခံ'} ကွတ်ကီး - ဤကွတ်ကီးအမျိုးအစားသည် ကျွန်ုပ်တို့၏
              ဝက်ဘ်ဆိုဒ်အတွင်း ဝင်ရောက်ကြည့်ရှုသည့် အချိန်ကိုသာ
              ခွဲဝေသတ်မှတ်ပါသည်။ ဆက်ရှင်အခြေခံကွတ်ကီးသည် ဝက်ဘ်ဆိုဒ်အတွင်း
              မြန်မြန်ဆန်ဆန် သွားလာနိုင်ရန် ကူညီပေးပါသည်။ သင်သည်
              စာရင်းပေးသွင်းထာရသူဖြစ်ပါက သင်နှင့်ပိုမိုသက်ဆိုင်သည့်
              အချက်အလက်များကိုသာ ဖော်ပြသွားမည်ဖြစ်ပါသည်။ ဤကွတ်ကီးမှာ
              သင့်ဘရောက်ဇာကို ပိတ်လိုက်သည်နှင့်
              အလိုအလျောက်သက်တမ်းကုန်ဆုံးသွားမည်ဖြစ်ပါသည်။
            </Text>
            <Text>
              ကျန်ရှိကွတ်ကီး - ဤ ကွတ်ကီးအမျိုးအစားသည် ကွတ်ကီးတစ်ခုစီအတွက်
              သတ်မှတ်ထားသော အချိန်အတိုင်းအတာတစ်ခုအထိ သင့်ကွန်ပြူတာတွင်
              ရှိနေမည်ဖြစ်သည်။ ဖလက်ရှ်ကွတ်ကီးများသည်လည်း
              ဆက်လက်ကျန်ရှိနေမည်ဖြစ်ပါသည်။
            </Text>
            <Text>
              {'ခွဲခြမ်းစိတ်ဖြာခြင်း'} ကွတ်ကီး- ဤကွတ်ကီးအမျိုးအစားသည်
              ကျွန်ုပ်တို့၏ ဆိုက်သို့လာရောက်လည်ပတ်သူအရေအတွက်ကို ရေတွက်နိုင်စေကာ
              ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများအား ဧည့်သည်များအသုံးပြုပုံကို
              ကြည့်ရှုနိုင်စေပါသည်။ ၎င်းတို့သည် သင်ရှာဖွေနေသည့်အရာကို
              လွယ်ကူစွာရှာဖွေနိုင်စေခြင်းဖြင့်
              ကျွန်ုပ်တို့၏ဝဘ်ဆိုက်များအလုပ်လုပ်ပုံတိုးတက်စေရန် ကူညီပေးပါသည်။
              ကွတ်ကီးများကို လက်ခံရန် သို့မဟုတ် ငြင်းပယ်ရန် သင့်တွင်
              ရွေးချယ်ဆုံးဖြတ်ခွင့်ရှိပါသည်။ ဝဘ်ဘရောက်ဆာအများစုသည်
              ကွတ်ကီးများကို အလိုအလျောက်လက်ခံသော်လည်း ကွတ်ကီးများကို
              ငြင်းပယ်လိုပါက သင့်ဘရောက်ဆာဆက်တင်မှတစ်ဆင့် ပြင်ဆင်နိုင်ပါသည်။
              ဘရောက်ဆာအများစု၏ မီနူးဘားရှိ အကူအညီမီနူးသည် သင့်ဘရောက်ဆာတွင်
              ကွက်ကီးအသစ်များကို လက်ခံခြင်းမှ မည်သို့တားဆီးရမည်၊
              ကွတ်ကီးအသစ်တစ်ခုလက်ခံရရှိသည့်အခါ ဘရောက်ဆာက သင့်အား
              မည်သို့အကြောင်းကြားရမည်နှင့် ကွတ်ကီးများကို
              မည်သို့လုံး၀ပိတ်ရမည်ကို ပြောပြမည်ဖြစ်ပါသည်။
            </Text>
            <Text fontWeight={700}>ဖလက်ရှ်ကွတ်ကီး - </Text>
            <Text>
              ဖလက်ရှ်ကွတ်ကီးများအသုံးပြုခြင်းကို တားဆီးရန် သင်၏ ဖလက်ရှ်ကစားသမား
              ဆက်တင်များကို ပြင်ဆင်နိုင်ပါသည်။ သင့် ဖလက်ရှ်ကစားသမား၏ ဆက်တင်များ
              မန်နေဂျာသည် သင့်စိတ်ကြိုက်ရွေးချယ်မှုများကို စီမံခန့်ခွဲရန်
              ခွင့်ပြုသည်။ ပြင်ပအဖွဲ့အစည်း အကြောင်းအရာအားလုံးမှ
              ဖလက်ရှ်ကွတ်ကီးများကို ခွင့်မပြုရန်၊ ဆက်တင်မန်နေဂျာ၏
              {'ကမ္ဘာလုံးဆိုင်ရာ သိုလှောင်မှု ဆက်တင်များ'} အကန့်သို့ သွားပြီး
              သင့်ကွန်ပျူတာပေါ်တွင် အချက်အလက်များကို သိမ်းဆည်းရန်
              ပြင်ပအဖွဲ့အစည်း ဖလက်ရှ်အကြောင်းအရာကို ခွင့်ပြုပါ ဟု
              အညွှန်းတပ်ထားသည့် အမှန်ခြစ်ကို ဖြုတ်ပြီး ဆက်တင်မန်နေဂျာကို ပိတ်ပါ။
            </Text>
            <Text>
              တစ်နည်းအားဖြင့် သင်သည် {'ဝဘ်ဆိုက် သိုလှောင်မှု ဆက်တင်များ'}
              အကန့်မှတဆင့် သင်ဝင်ရောက်ကြည့်ရှုသည့် ဆက်တင်များကို
              ချိန်ညှိနိုင်ပါသည်။ ဤသည်ကို ဆက်တင်များ မန်နေဂျာတွင်လည်း
              တွေ့နိုင်ပါသည်။ အကယ်၍ သင်သည် ဖလက်ရှ်ကစားသမား၏ ဗားရှင်းဟောင်း
              သို့မဟုတ် ဝက်ဘ်ဘရောက်ဆာ အဟောင်းကို အသုံးပြုနေပါက ဆက်တင်များ
              မန်နေဂျာသည် သင့်အတွက် မရရှိနိုင်ပါ။ သင်၏ ဖလက်ရှ်ကစားသမားနှင့်
              ဘရောက်ဆာကို နောက်ဆုံးဗားရှင်းများသို့ တိုးမြှင့်အသုံးပြုရန်
              အကြံပြုလိုပါသည်။ ကွတ်ကီးများကို ငြင်းပယ်ရန် သင်ရွေးချယ်ပါက၊
              ကျွန်ုပ်တို့၏ ဝဘ်ဆိုက်များရှိ အပြန်အလှန်သတင်းပေးပို့ချက်များကို
              တွေ့ကြုံခံစားနိုင်မည်မဟုတ်ပါ။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၁၃။ ပြင်ပအဖွဲ့အစည်း ကျင့်ထုံးများ
            </Text>
            <Text>
              ကျွန်ုပ်တို့သည် ကျွန်ုပ်တို့၏ တွဲဖက်ပရိုဂရမ်ကို စီမံခန့်ခွဲသည့်
              ပြင်ပအဖွဲ့အစည်း သို့မဟုတ် အခြားဝန်ဆောင်မှုများနှင့် ချိတ်ဆက်ထားသော
              ပြင်ပအဖွဲ့အစည်းများနှင့် ချိတ်ဆက်ထားသော ပြင်ပကုမ္ပဏီများထံသို့
              ပေးဆောင်ထားသည့် အချက်အလက်များ၏ အကာအကွယ်ကို သေချာမသိနိုင်ပါ။
              ဤပြင်ပအဖွဲ့အစည်းအွန်လိုင်းဆိုက်များသည်
              သီးခြားပိုင်ဆိုင်သူများနှင့် လွတ်လပ်စွာလုပ်ဆောင်နေသော
              ပရိုဂရမ်ဖြစ်ပါသည်။ ဤပြင်ပအဖွဲ့အစည်းများမှ စုဆောင်းထားသော
              အချက်အလက်မှန်သမျှကို ထိုအဖွဲ့အစည်း၏
              ကိုယ်ရေးကိုယ်တာမူဝါဒအရသာအုပ်ချုပ်ပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၁၄။ ဥပဒေကြောင်းအရ ငြင်းဆိုချက်
            </Text>
            <Text>
              ဝန်ဆောင်မှုများသည် မည်သို့သော တာဝန်ယူမှုမျှ မရှိဘဲ
              အရှိကိုအရှိတိုင်းသာ လုပ်ဆောင်ပါသည်။ ကျွန်ုပ်တို့၏
              တိုက်ရိုက်ထိန်းချုပ်မှုထက်ကျော်လွန်သော ကိစ္စရပ်များအတွက်
              ကျွန်ုပ်တို့တွင် တာဝန်မရှိပါ။ ကျွန်ုပ်တို့၏နည်းပညာနှင့် လုပ်ငန်း၏
              ရှုပ်ထွေးပြီး အမြဲပြောင်းလဲနေသော သဘောသဘာဝကြောင့်
              သင့်ကိုယ်ရေးကိုယ်တာအချက်အလက်လုံခြုံမှုနှင့် ပတ်သက်၍
              အမှားအယွင်းကင်းသော စွမ်းဆောင်မှုရှိလာမည်ဟု ကျွန်ုပ်တို့
              အာမမခံနိုင်သလို၊ ကျွန်ုပ်တို့သည် သွယ်ဝိုက်သော၊
              မတော်တဆဖြစ်မှုများအတွက် တာဝန်ရှိမည်မဟုတ်ပါ။ အဆိုပါ
              ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို အသုံးပြုခြင်း၊
              ထုတ်ပြန်ခြင်းဆိုင်ရာ အကျိုးဆက် သို့မဟုတ် ပြစ်ဒဏ်ပေးခြင်း
              နစ်နာမှုများ စသည်တို့အတွက် ကျွန်ုပ်တို့တွင် ဥပဒေအရ
              တာဝန်ရှိမည်မဟုတ်ပါ။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ၁၅။ ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများကိုအသုံးပြုခြင်းသည်
              ကျွန်ုပ်တို့၏ကိုယ်ရေးကိုယ်တာမူဝါဒအတွက် သဘောတူညီချက်တစ်ခုဖြစ်ပါသည်။
            </Text>
            <Text>
              ၎င်းသည် ကျွန်ုပ်တို့၏ သီးသန့်ကိုယ်ရေးကိုယ်တာမူဝါဒတစ်ခုလုံးဖြစ်ပြီး
              ၎င်းသည် အစောပိုင်းဗားရှင်းများ အားလုံးကို အစားထိုးထားခြင်း
              ဖြစ်ပါသည်။ ဤကိုယ်ရေးကိုယ်တာမူဝါဒကို ကျွန်ုပ်တို့၏
              စည်းမျဥ်းစည်းကမ်းများနှင့် ကျွန်ုပ်တို့၏ပလက်ဖောင်းပေါ်တွင်
              တင်ထားသော သက်ဆိုင်ရာစည်းကမ်းချက်များနှင့်အတူ ဖတ်ရှုရပါမည်။
              ကျွန်ုပ်တို့သည် ဤကိုယ်ရေးကိုယ်တာမူဝါဒကို အခါအားလျော်စွာ
              အပြောင်းအလဲများ ပြုလုပ်နိုင်ပြီး ကျွန်ုပ်တို့၏ပလက်ဖောင်းများတွင်
              ပြုပြင်ထားသော စည်းကမ်းချက်များကို ပို့စ်တင်ခြင်းဖြင့်
              အဆိုပါပြောင်းလဲမှုများကို သင့်အား အသိပေးပါမည်။
              ဤကိုယ်ရေးကိုယ်တာမူဝါဒကို ပြောင်းလဲမှုများအပြီးတွင်
              ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများကို ဆက်လက်အသုံးပြုခြင်းသည်
              သင်၏သဘောတူညီချက်ကို လက်ခံရရှိသည်ဟု ယူဆပါသည်။
              ဤကိုယ်ရေးကိုယ်တာမူဝါဒကို ပုံမှန်ပြန်လည်ကြည့်ရှုရန်
              ကျွန်ုပ်တို့အကြံပြုလိုပါသည်။
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ၁၆။ အခြားဝဘ်ဆိုဒ်များ
            </Text>
            <Text>
            ကျွန်ုပ်တို့၏ဝဘ်ဆိုက်တွင် ကျွန်ုပ်တို့၏ထိန်းချုပ်မှုအပြင်ဘက်ရှိ အခြားဝဘ်ဆိုက်များနှင့် ဤကိုယ်ရေးကိုယ်တာမူဝါဒအရ အကျုံးမဝင်သော လင့်ခ်များပါရှိပါသည်။  ပေးထားသည့် လင့်ခ်များကို အသုံးပြု၍ အခြားဆိုက်များကို ဝင်ရောက်ကြည့်ရှုပါက၊ အဆိုပါဆိုက်များ၏ အော်ပရေတာများသည် ကွဲလွဲနိုင်သည့်အတွက် ၎င်းတို့၏ ကိုယ်ရေးကိုယ်တာ မူဝါဒနှင့်အညီ ၎င်းတို့မှ အသုံးပြုမည့် အချက်အလက်များကို သင့်ထံမှ စုဆောင်းနိုင်ပါသည်။
            </Text>
          </Box>
        </Flex>
      )}
      {language === "KM" &&  (
        <Flex
          flexDir={"column"}
          color={"rgba(255,255,255, 0.7)"}
          gap={["30px", "30px", "16px", "16px"]}
          fontSize={[14, 14, 16, 16]}
          lineHeight={2}
        >
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១. ឯកជនភាព
            </Text>
            <Text>
            Eurobet ប្តេជ្ញាការពារព័ត៌មានផ្ទាល់ខ្លួនរបស់អតិថិជនយើងក្នុងនាមជាអ្នកលេង។ គោលការណ៍ ឯកជនភាពនេះអនុញ្ញាតឱ្យអ្នកដឹងថា តើព័ត៌មានអ្វីខ្លះដែលយើងប្រមូល នៅពេលអ្នកប្រើសេវារបស់យើង ហេតុអ្វីបានជាយើងប្រមូលព័ត៌មានទាំងនេះ ហើយតើយើងប្រើព័ត៌មានដែលប្រមូលបានដោយរបៀបណា។
            </Text>
            <Text>
            សូមកត់សម្គាល់ថាគោលការណ៍ឯកជនភាពនេះ នឹងត្រូវមានការយល់ព្រមរវាងអ្នក និង Eurobet (តទៅនេះហៅថា 'យើង', 'ពួកយើង' ឬ 'របស់យើង' តាមករណីជាក់ស្តែង)។ គោលការណ៍ឯកជនភាពនេះគឺជាផ្នែករួមមួយនៃប្រការ និងលក្ខខណ្ឌរបស់ Eurobet។ យើងអាចធ្វើការកែប្រែគោលការណ៍ឯកជនភាពនេះជាទៀងទាត់ ហើយ​នឹងជូនដំណឹងដល់អ្នកអំពីការកែប្រែទាំងនេះ ដោយបង្ហោះលក្ខខណ្ឌដែលបានកែប្រែនៅលើវេទិការបស់យើង។ យើងសូមណែនាំឱ្យអ្នកពិនិត្យមើលគោលការណ៍ឯកជនភាពនេះឡើងវិញជាទៀងទាត់។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ២. ព័ត៌មានដែលប្រមូលបាន
            </Text>
            <Text>
            យើងចាត់ទុកជាព័ត៌មានផ្ទាល់ខ្លួន នូវព័ត៌មានទាំងឡាយដែលអាចកំណត់អត្តសញ្ញាណបុគ្គល ដូចជានាមខ្លួន និងនាមត្រកូល ថ្ងៃខែឆ្នាំកំណើត អាសយដ្ឋានស្នាក់នៅ ឬអាសយដ្ឋានពិតប្រាកដផ្សេងទៀត អាសយដ្ឋានអ៊ីម៉ែល លេខទូរសព្ទ ឬព័ត៌មានពាក់ព័ន្ធផ្សេងៗ (តទៅនេះហៅថា 'ព័ត៌មានផ្ទាល់ខ្លួន') ។ អ្នកអាចត្រូវបានស្នើសុំឱ្យផ្តល់ព័ត៌មានផ្ទាល់ខ្លួន នៅពេលអ្នកប្រើគេហទំព័ររបស់យើង ចុះឈ្មោះគណនី ឬប្រើប្រាស់    សេវារបស់យើង។ ព័ត៌មានផ្ទាល់ខ្លួនដែលយើងប្រមូលបាន អាចរួមមានព័ត៌មាននានា ដូចជាព័ត៌មានទំនាក់ទំនង (រួមទាំងលេខទូរសព្ទ) ព័ត៌មានដឹកជញ្ជូន ព័ត៌មានផ្ញើវិក្កយបត្រ ប្រវត្តិប្រតិបត្តិការ ចំណូលចិត្តការ ប្រើប្រាស់គេហទំព័រ និងមតិយោបល់អំពីសេវា។ ព័ត៌មានទាំងនេះត្រូវបានពួកយើងរក្សាទុកគ្រប់ពេលនៅលើម៉ាស៊ីនមេដែលមាននៅទីតាំងខុសៗគ្នា និងនៅកន្លែងផ្សេងទៀតគ្រប់ពេលវេលា។ នៅពេលអ្នកធ្វើអន្តរកម្មជាមួយសេវា នោះម៉ាស៊ីនមេរបស់យើងនឹងរក្សាកំណត់ត្រាសកម្មភាពសម្រាប់អ្នកតែមួយគត់ ដោយប្រមូល​ព័ត៌មានរដ្ឋបាល និងចរាចរណ៍មួយចំនួន រួមទាំងអាសយដ្ឋាន IP ប្រភព ពេលវេលាចូល កាលបរិច្ឆេទចូល     ទំព័របណ្តាញដែលបានចូល ការប្រើប្រាស់ភាសា របាយការណ៍នៅពេលចាកចេញពីកម្មវិធី និងប្រភេទកម្មវិធីរុក   រកដែលបានប្រើ។ ព័ត៌មានទាំងនេះគឺចាំបាច់ណាស់សម្រាប់ផ្តល់សេវារបស់យើងប្រកបដោយគុណភាព។ យើងមិនប្រមូលព័ត៌មានផ្ទាល់ខ្លួនអំពី​​អ្នកដោយមិនបានជូនដំណឹងដល់អ្នកនោះទេ។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ៣. មធ្យោបាយនៃការប្រមូល និងដំណើរការទិន្នន័យ
            </Text>
            <Text>
            យើងអាចប្រមូលទិន្នន័យជាក់លាក់ដោយស្វ័យប្រវត្តិ ដូចបានពិភាក្សាខាងលើ និងទទួលបានព័ត៌មានផ្ទាល់ខ្លួនអំពីអ្នក ហើយអ្នកបានផ្តល់ព័ត៌មានទាំងនេះតាមរយៈសេវា ឬការប្រាស្រ័យទាក់ទង និងអន្តរកម្មក្នុងទម្រង់ផ្សេងៗតាមរយៈគេហទំព័ររបស់ Eurobet។ យើងក៏អាចទទួលបានព័ត៌មានផ្ទាល់ខ្លួនផងដែរពីអ្នកលក់ និង​អ្នកផ្តល់សេវាតាមអនឡាញ និងពីបញ្ជីអតិថិជនដែលទទួលបានដោយស្របច្បាប់ពីអ្នកលក់ពីភាគីទីបី។ លើស​​ពី​នេះ យើងអាចភ្ជាប់សេវារបស់អ្នកផ្តល់សេវាពីភាគីទីបី ដើម្បីផ្តល់ការគាំទ្របច្ចេកទេសលើដំណើរការប្រតិបត្តិការតាមអនឡាញ និងថែទាំគណនី។ យើង​មាន​សិទ្ធិ​ចូល​ប្រើប្រាស់​ព័ត៌មាន​ណា​មួយ​ដែល​អ្នក​ផ្តល់ជូន​អ្នក​លក់ អ្នក​ផ្តល់​សេវា និង​សេវា​ពាណិជ្ជកម្ម​អេឡិចត្រូនិក​ពីភាគី​ទីបី ហើយ​យើង​នឹង​ប្រើ​ព័ត៌មាន​ផ្ទាល់ខ្លួន​ដូច​មាន​ចែង​ក្នុង​គោលការណ៍​ឯកជនភាព​នេះ។ យើងចាត់វិធានការនានា ដើម្បីធានាការពារឯកជនភាពរបស់អ្នក តាមរយៈការរៀបចំចាត់ចែងរបស់យើងជាមួយអ្នកផ្តល់សេវាភាគីទីបី និងអ្នកលក់តាមអនឡាញ ។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ៤. ការប្រើប្រាស់ព័ត៌មាន
            </Text>
            <Text>
              យើងប្រើប្រាស់ព័ត៌មានផ្ទាល់ខ្លួនដែលយើងប្រមូលពីអ្នក ដើម្បីផ្តល់សេវារបស់យើង ផ្តល់ការគាំទ្រដល់អតិថិជន ធ្វើការត្រួតពិនិត្យសុវត្ថិភាព និងផ្ទៀងផ្ទាត់អត្តសញ្ញាណជាចាំបាច់ ដំណើរការរាល់ប្រតិបត្តិការតាម   អនឡាញរបស់អ្នក ដើម្បីជួយដល់អ្នកចូលរួមក្នុងកម្មវិធីប្រូម៉ូសិនពីភាគីទីបី ដើម្បីបំពេញលក្ខខណ្ឌអាជីវកម្មជាក់លាក់ និងសម្រាប់គោលបំណងផ្សេងទៀតទាក់ទងនឹងប្រតិបត្តិការសេវា។ ដូច្នេះ យើងអាចចែករំលែកព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នកជាមួយដៃគូរបស់យើងដែលបា​នជ្រើសរើសដោយប្រុងប្រយ័ត្ន (រួមទាំងភាគីផ្សេងទៀតដែលមានការរៀបចំចែករំលែកទិន្នន័យជាមួយដៃគូទាំងនោះ)។
            </Text>
            <Text>
              ក. 	ការផ្តល់ជូនប្រម៉ូសិន និងព័ត៌មានទាក់ទងនឹងផលិតផល និងសេវារបស់យើង និង
            </Text>
            <Text>
              ខ. 	ការផ្តល់ជូនប្រម៉ូសិន និងព័ត៌មានទាក់ទងនឹងផលិតផល និងសេវារបស់ដៃគូយើង ដើម្បី	ពង្រីក​ជម្រើសផលិតផលដែលបានផ្តល់ជូន និងកែលម្អសេវាគាំទ្រអតិថិជនរបស់យើង។
            </Text>
            <Text>
              យើងអាចស្នើសុំព័ត៌មានពីអ្នកបានគ្រប់ពេលតាមរយៈការស្ទង់មតិ ឬការប្រកួតប្រជែង។ ការចូលរួមក្នុងការស្ទង់មតិ ឬការប្រកួតប្រជែងទាំងនេះ គឺផ្អែកតាមគោលការណ៍ស្ម័គ្រចិត្តទាំងស្រុង ហើយអ្នកអាចមានជម្រើសបញ្ចេញ ឬមិនបញ្ចេញព័ត៌មានក៏បាន។ ព័ត៌មានដែលបានស្នើសុំអាចរួមមានព័ត៌មានទំនាក់ទំនង       ផ្សេងៗ (ដូចជាឈ្មោះ អាសយដ្ឋានទំនាក់ទំនង និងលេខទូរសព្ទ) និងព័ត៌មានប្រជាសាស្រ្ត (ដូចជាលេខកូដតំបន់ លេខកូដប្រៃសណីយ៍ ឬអាយុ)។ តាមរយៈការទទួលយករង្វាន់នៃការប្រកួត ឬការឈ្នះណាមួយ នោះអ្នកយល់ព្រមឱ្យប្រើប្រាស់ឈ្មោះរបស់អ្នកសម្រាប់ផ្សព្វផ្សាយពាណិជ្ជកម្ម ហើយសម្រេចចិត្តមិនទទួលព័ត៌មានអំពីកម្មវិធីប្រូម៉ូសិន។ យើងក៏អាចប្រើព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក (រួមទាំងអាសយដ្ឋានអ៊ីម៉ែល និងលេខទូរសព្ទរបស់អ្នក) ដើម្បីផ្តល់ជូនអ្នកនូវព័ត៌មានទាក់ទងនឹងផលិតផល សេវា និងកម្មវិធីប្រូម៉ូសិនរបស់យើង រួមទាំងផលិតផល​ហ្គេមផ្សេងទៀត (ដូចជាល្បែងបៀ កាស៊ីណូ ការភ្នាល់ និងល្បែង backgammon តាមអនឡាញ) ក៏ដូចជា​ផលិតផល និងសេវាពីភាគីទីបីដែលពួកយើងបានជ្រើសរើសយ៉ាងប្រុងប្រយ័ត្ន។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ៥. ករណីលើកលែងមួយចំនួនលើការបញ្ចេញព័ត៌មាន
            </Text>
            <Text>
            យើងអាចបញ្ចេញព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក ប្រសិនបើតម្រូវដោយច្បាប់ ឬប្រសិនបើយើងជឿជាក់ដោយស្មោះត្រង់ថាសកម្មភាពនេះជាការចាំបាច់ដើម្បី៖
            </Text>
            <OrderedList type="a" pl={4}>
              <ListItem>
              ក. អនុវត្តតាមដំណើរការផ្លូវច្បាប់ដែលកំណត់ចំពោះយើង គេហទំព័រ ឬសេវារបស់យើង ឬនៅក្នុង       កាលៈទេសៈដែលយើងស្ថិតនៅក្រោមកាតព្វកិច្ចផ្លូវច្បាប់ស្រដៀងគ្នាខ្លាំង។
              </ListItem>
              <ListItem>
              ខ. រក្សាការពារ និងការពារសិទ្ធិ ឬទ្រព្យសម្បត្តិរបស់យើង ឬ
              </ListItem>
              <ListItem>
              គ. ការពារសុវត្ថិភាពផ្ទាល់ខ្លួនរបស់អ្នកប្រើប្រាស់សេវា ឬសាធារណជន។ ប្រសិនបើតាមការវិនិច្ឆ័យទាំងស្រុងរបស់យើង អ្នកត្រូវរកឃើញថាបានបោកប្រាស់ ឬព្យាយាមបោកបន្លំយើង ក្រុមហ៊ុន ឬអ្នកផ្សេងទៀតដែលប្រើប្រាស់សេវាតាមមធ្យោបាយណាមួយ ដូចជាការលេងបោកបន្លំ ឬការទូទាត់ក្លែងបន្លំ ឬប្រសិនបើយើងសង្ស័យថាអ្នកក្លែងបន្លំការទូទាត់ រួមទាំងការប្រើប្រាស់កាតឥណទានដែលបានលួចពីគេ ឬសកម្មភាពក្លែងបន្លំណាមួយផ្សេងទៀត (រួមទាំងការបង្វិលប្រាក់ត្រលប់ ឬការបង្វិលការទូទាត់ប្រាក់ផ្សេងទៀត) ឬប្រតិបត្តិការហាមឃាត់ (រួមទាំងការសម្អាតប្រាក់) យើងរក្សាសិទ្ធិក្នុងការចែករំលែកព័ត៌មាននេះ (រួមទាំងអត្តសញ្ញាណរបស់អ្នក) ជាមួយគេហទំព័រហ្គេមតាមអនឡាញ ធនាគារ ក្រុមហ៊ុនកាតឥណទាន ទីភ្នាក់ងារមានសមត្ថកិច្ច និងអាជ្ញាធរពាក់ព័ន្ធ។
              </ListItem>
              <ListItem>
              ឃ. សម្រាប់ប្រើប្រាស់ក្នុងគោលបំណងស្រាវជ្រាវលើការទប់ស្កាត់ការញៀនល្បែង ដោយទិន្នន័យអាចធ្វើឡើងជាលក្ខណៈអនាមិក និងបញ្ជូនទៅស្ថាប័ននីមួយៗ។
              </ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
              ៦. ការចូលប្រើ
            </Text>
            <Text>
            អ្នកអាចបដិសេធមិនទទួលការទំនាក់ទំនងផ្តល់ប្រូម៉ូសិនណាមួយ ដោយជ្រើសរើសបដិសេធតាមរយៈការកំណត់មុខងារគណនីរបស់អ្នកដែលមាននៅលើគេហទំព័រ ឬសេវារបស់យើង ឬអ៊ីម៉ែលដែលអ្នកទទួលបានពីយើង ឬនៅពេលណាក៏បានដោយផ្ញើអ៊ីម៉ែល ឬសរសេរមកកាន់យើងតាមរយៈផ្នែកគាំទ្រអតិថិជន។ លើសពីនេះទៀត អ្នកអាចទាក់ទងមកយើងប្រសិនបើអ្នក៖
            </Text>

            <OrderedList type="a" pl={4}>
              <ListItem>
              ក. ចង់បញ្ជាក់ពីភាពត្រឹមត្រូវនៃព័ត៌មានផ្ទាល់ខ្លួនអំពីអ្នក​ដែលយើងបានប្រមូល។
              </ListItem>
              <ListItem>
              ខ. ចង់ធ្វើបច្ចុប្បន្នភាពព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក និង/ឬ
              </ListItem>
              <ListItem>
              គ. មានបណ្តឹងណាមួយទាក់ទងនឹងការប្រើប្រាស់ព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក។ ប្រសិនបើមានការស្នើសុំ នោះយើងនឹង៖
              </ListItem>
              <ListItem>
              ធ្វើបច្ចុប្បន្នភាពព័ត៌មានដែលអ្នកបានផ្តល់ជូនយើង ក្នុងករណីដែលអ្នកបញ្ជាក់ថា	មានភាពចាំបាច់នៃការផ្លាស់ប្តូរព័ត៌មានទាំងនេះ ឬ
              </ListItem>
              <ListItem>
              កត់សម្គាល់ព័ត៌មានណាមួយដែលហាមឃាត់ការប្រើប្រាស់នៅថ្ងៃក្រោយសម្រាប់	គោលបំណងទីផ្សារ។ ដើម្បីបញ្ជាក់ឱ្យបានច្បាស់ គ្មានអ្វីនៅក្នុងគោលការណ៍ឯកជន	ភាពនេះរារាំងដល់យើងក្នុងការរក្សាទុកព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក ក្នុងករណីដែល	ច្បាប់តម្រូវឱ្យយើងធ្វើដូច្នេះ។
              </ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ៧. ការយល់ព្រមលើការប្រើប្រាស់អ្នកផ្តល់សេវាតាមប្រព័ន្ធអេឡិចត្រូនិក
            </Text>
            <Text>
            ដើម្បីលេងល្បែងដាក់លុយពិតនៅលើសេវារបស់យើង អ្នកត្រូវផ្ញើប្រាក់មកកាន់យើង និងទទួលប្រាក់ពីយើង។ យើងអាចប្រើប្រាស់ប្រព័ន្ធទូទាត់ប្រាក់អេឡិចត្រូនិកពីភាគីទីបី ដើម្បីដំណើរការប្រតិបត្តិការហិរញ្ញវត្ថុបែបនេះ។ តាមរយៈការទទួលយកគោលការណ៍ឯកជនភាពនេះ អ្នកយល់ព្រមយ៉ាងច្បាស់លើការប្រើប្រាស់ព័ត៌មានផ្ទាល់ខ្លួនដែលចាំបាច់សម្រាប់ដំណើរការប្រតិបត្តិការ រួមទាំងការផ្ទេរព័ត៌មាននៅខាងក្រៅប្រទេសរបស់អ្នក ក្នុងករណីចាំបាច់។ យើងចាត់វិធានការនានាដើម្បីធានាការពារភាពឯកជនរបស់អ្នកតាមរយៈការរៀបចំចាត់ចែងរបស់យើងជាមួយប្រព័ន្ធទូទាត់ប្រាក់។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ៨. ការយល់ព្រមចំពោះការត្រួតពិនិត្យសុវត្ថិភាព
            </Text>
            <Text>
            យើងរក្សាសិទ្ធិត្រួតពិនិត្យសុវត្ថិភាពគ្រប់ពេល ដើម្បីវាយតម្លៃសុពលភាពនៃទិន្នន័យចុះឈ្មោះដែលអ្នកបានផ្តល់ជូន និងដើម្បីផ្ទៀងផ្ទាត់ការប្រើប្រាស់សេវា និងប្រតិបត្តិការហិរញ្ញវត្ថុរបស់អ្នក ដើម្បីរកមើលការបំពានណាមួយលើប្រការ និងលក្ខខណ្ឌរបស់យើង និងច្បាប់ជាធរមាន។ តាមរយៈការប្រើប្រាស់សេវារបស់យើង និងយល់ព្រមតាមប្រការ និងលក្ខខណ្ឌរបស់យើង នោះអ្នកអនុញ្ញាតឱ្យយើងប្រើប្រាស់ព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក និងបញ្ចេញព័ត៌មានទាំងនេះទៅដល់ភាគីទីបី សម្រាប់គោលបំណងវាយតម្លៃសុពលភាពព័ត៌មានដែលអ្នកផ្តល់ជូនក្នុងអំឡុងពេលប្រើប្រាស់សេវារបស់យើង រួមទាំងផ្ទេរព័ត៌មាននៅខាងក្រៅប្រទេសរបស់អ្នក ក្នុងករណី និងនៅពេលចាំបាច់។ ការត្រួតពិនិត្យសុវត្ថិភាពអាចរួមមានការទាមទាររបាយការណ៍ឥណទាន និង/ឬផ្ទៀងផ្ទាត់ព័ត៌មានដែលបានផ្តល់ជូនធៀបជាមួយនឹងមូលដ្ឋានទិន្នន័យរបស់ភាគីទីបី។ លើស​ពី​នេះ​ទៀត ដើម្បី​សម្រួល​​ដល់​ការ​ពិនិត្យ​សុវត្ថិភាព​ទាំង​នេះ អ្នក​យល់ព្រម​ផ្តល់​ព័ត៌មាន ឬ​ឯកសារ​តាមការស្នើសុំរបស់​យើង។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ៩. សន្តិសុខ
            </Text>
            <Text>
            យើងយល់ពីសារៈសំខាន់នៃសុវត្ថិភាព និងបច្ចេកទេសចាំបាច់ដើម្បីធានាសុវត្ថិភាពព័ត៌មាន។ យើងរក្សាទុកព័ត៌មានផ្ទាល់ខ្លួនទាំងអស់ដែលយើងទទួលបានដោយផ្ទាល់ពីអ្នក នៅក្នុងមូលដ្ឋានទិន្នន័យដែលបាន    អ៊ិនគ្រីប និងការពារដោយប្រើពាក្យសម្ងាត់នៅក្នុងបណ្តាញសុវត្ថិភាពរបស់យើង ដែលគាំទ្រដោយកម្មវិធី firewall ដ៏ទំនើប (សេវាគាំទ្រ SSL របស់យើង)។ យើងក៏ចាត់វិធានការដើម្បីធានាថាក្រុមហ៊ុនបុត្រសម្ព័ន្ធ ភ្នាក់ងារ សាខា និងអ្នកផ្គត់ផ្គង់របស់យើងនឹងមានវិធានការសុវត្ថិភាពគ្រប់គ្រាន់ផងដែរ។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១០. ការការពារអនីតិជន
            </Text>
            <Text>
            សេវារបស់យើងមិនមែនសម្រាប់ ឬកំណត់គោលដៅលើជនដែលមានអាយុក្រោម ១៨ (ដប់ប្រាំបី) ឆ្នាំ ឬក្រោមនីតិភាពនៅក្នុងដែនយុត្តាធិការនីមួយៗនោះទេ។ អ្នកទាំងឡាយដែលផ្តល់ព័ត៌មានតាមរយៈផ្នែកណាមួយនៃសេវារបស់យើង បង្ហាញថាខ្លួនមានអាយុយ៉ាងតិច ១៨ (ដប់ប្រាំបី) ឆ្នាំ ឬមានីតិភាព។ យើងមានគោលការណ៍ស្វែងរកអនីតិជនដែលប៉ុនប៉ងចូលប្រើសេវារបស់យើងដែលចាប់ផ្ដើមពីការត្រួតពិនិត្យសុវត្ថិភាព។ នៅពេលដែលអនីតិជនព្យាយាមចុះឈ្មោះ ឬបញ្ជូនព័ត៌មានផ្ទាល់ខ្លួនតាមរយៈសេវារបស់យើង ការចុះឈ្មោះ និង/ឬការបញ្ជូននេះនឹងត្រូវបានបដិសេធ និងលុបចេញពីកំណត់ត្រារបស់យើង។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១១. ការផ្ទេរជាអន្តរជាតិ
            </Text>
            <Text>
            ព័ត៌មានផ្ទាល់ខ្លួនដែលប្រមូលបាននៅលើសេវាអាចត្រូវបានរក្សាទុក និងដំណើរការនៅក្នុងប្រទេសណាមួយដែលយើង និងសាខារបស់យើង អ្នកផ្គត់ផ្គង់ ឬភ្នាក់ងាររបស់យើងមានគ្រឿងបរិក្ខារ។ តាមរយៈការប្រើប្រាស់សេវារបស់យើង អ្នកយល់ព្រមយ៉ាងច្បាស់លើការផ្ទេររាល់ព័ត៌មាននៅខាងក្រៅប្រទេសរបស់អ្នក (រួមទាំងប្រទេសដែលចាត់ទុកថាមិនមានច្បាប់ឯកជនភាពគ្រប់គ្រាន់)។ ទោះជាយ៉ាងណា យើងចាត់វិធានការនានាដើម្បីធានាថាភ្នាក់ងារ សាខា និងអ្នកផ្គត់ផ្គង់របស់យើង គោរពតាមបទដ្ឋានឯកជនភាពរបស់យើងដោយមិនគិតពីទីតាំងរបស់ពួកគេ។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១២. កម្មវិធី Cookies
            </Text>
            <Text fontWeight={700}> ព័ត៌មានដែលរក្សាទុកនៅលើឧបករណ៍របស់អ្នក</Text>
            <Text>
            យើងអាចរក្សាទុកព័ត៌មាននៅលើឧបករណ៍ ដែលប្រើសេវារបស់យើង។ ព័ត៌មានទាំងនេះហៅថា cookies ដែលជាសំណុំហ្វាលអត្ថបទតូចៗត្រូវបានរក្សាទុកនៅលើឧបករណ៍ដើម្បីកត់ត្រាចំណូលចិត្តរបស់អ្នកប្រើប្រាស់នៅពេលដែលចូលមើលទំព័រអនឡាញ។ យើងក៏ប្រើឧបករណ៍ Local Shared Objects ឬ "flash cookies" ផងដែរ។ ឧបករណ៍ Flash cookies គឺស្រដៀងទៅនឹង browser Cookers ដោយវារក្សាទុក និងចងចាំព័ត៌មានជាក់លាក់​នៅពេលដែលមានគេចូលមើលគេហទំព័រ​។
            </Text>
            <Text>
            ទាំងឧបករណ៍ cookies ឬ flash cookies មិន​អាច​ប្រើបាន​ដើម្បី​ចូលមើល ឬ​ប្រើ​ព័ត៌មាន​ផ្សេង​ទៀត​នៅ​​លើ​កុំព្យូទ័រ​របស់​អ្នក​ទេ។ យើងប្រើវិធីសាស្រ្តទាំងនេះ ដើម្បីតាមដានការប្រើប្រាស់សេវារបស់យើងតែប៉ុណ្ណោះ។ Cookies ជួយឱ្យយើងត្រួតពិនិត្យចរាចរណ៍ទៅកាន់គេហទំព័រ កែលម្អឱ្យប្រសើរឡើងនូវសេវារបស់យើង និងបង្កើនភាពងាយស្រួល និង/ឬការពាក់ព័ន្ធបន្ថែមទៀតជាមួយនឹងការប្រើប្រាស់របស់អ្នក។ យើងប្រើឧបករណ៍ flash cookies និង cookies ពីភាគីទីបី ដើម្បីជួយឱ្យយើងបង្ហាញការផ្សាយពាណិជ្ជកម្មពាក់ព័ន្ធបន្ថែមទៀតទៅដល់អ្នកតាមការចង់បាន។
            </Text>
            <Text fontWeight={700}>លក្ខខណ្ឌប្រើប្រាស់ឧបករណ៍ cookies ជាដាច់ខាត</Text>
            <Text>
            លក្ខខណ្ឌប្រើប្រាស់ឧបករណ៍ cookies ជាដាច់ខាត គឺដើម្បីអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ដំណើរការលើ គេហទំព័រ និងប្រើប្រាស់មុខងារពិសេស ដូចជាការចូលទៅកាន់តំបន់សុវត្ថិភាពនៃគេហទំព័រ ឬធ្វើប្រតិបត្តិការហិរញ្ញវត្ថុ។ បើគ្មាន cookies ទាំងនេះទេ យើងមិនអាចដំណើរការគេហទំព័ររបស់យើងប្រកបដោយប្រសិទ្ធភាពនោះទេ។
            </Text>
            <Text fontWeight={700}>ក្នុងអំឡុងពេលដំណើរការចុះឈ្មោះ</Text>
            <Text>
            Cookies រក្សាទុកព័ត៌មានដែលប្រមូលបានក្នុងអំឡុងពេលចុះឈ្មោះ និងអនុញ្ញាតឱ្យប្រព័ន្ធស្គាល់អតិថិជន និងផ្តល់សេវាសមស្របតាមតម្រូវការ។ យើងក៏អាចប្រើទិន្នន័យនេះផងដែរ ដើម្បីបានយល់ច្បាស់ពីចំណាប់អារម្មណ៍របស់អ្នក នៅពេលដែលភ្ជាប់អ៊ីនធឺណិត និងដើម្បីបង្កើនការចូលរបស់អ្នកទៅកាន់វេទិការបស់យើង។
            </Text>
            <Text>
            សម្រាប់អ្នកចូលគេហទំព័ររបស់យើង យើងប្រើ cookies ដើម្បីប្រមូលព័ត៌មាន។ ម៉ាស៊ីនមេរបស់យើងប្រើ​ cookies ចំនួន ០៣​ (បី) ប្រភេទផ្សេងគ្នា៖
            </Text>

            <Text>
            cookie 'ដំណើរការបណ្តោះអាសន្ន'៖ cookie ប្រភេទនេះបម្រុងទុកសម្រាប់កុំព្យូទ័ររបស់អ្នកតែនៅអំឡុងពេលចូលគេហទំព័ររបស់យើងប៉ុណ្ណោះ។ cookie ដំណើរការបណ្តោះអាសន្ន ជួយឱ្យអ្នកដំណើរការលើគេហទំព័ររបស់យើងកាន់តែលឿន ហើយប្រសិនបើអ្នកជាអតិថិជនដែលបានចុះឈ្មោះ នោះអនុញ្ញាតឱ្យយើង   ផ្តល់ឱ្យអ្នកនូវព័ត៌មានពាក់ព័ន្ធបន្ថែមទៀតសម្រាប់អ្នក។ cookie នេះនឹងអស់សុពលភាពដោយស្វ័យប្រវត្តិនៅពេលអ្នកបិទកម្មវិធីរុករករបស់អ្នក។
            </Text>
            <Text>
            cookie 'អចិន្ត្រៃយ៍'៖ cookie ប្រភេទនេះ នៅតែដំណើរការនៅលើកុំព្យូទ័ររបស់អ្នកក្នុងរយៈពេលកំណត់មួយរបស់ cookie នីមួយៗ។ Flash cookie ក៏មានលក្ខណៈអចិន្ត្រៃយ៍ផងដែរ។
            </Text>
            <Text>
            cookie 'វិភាគ'៖ cookie ប្រភេទនេះអនុញ្ញាតឱ្យយើងស្គាល់ និងដឹងចំនួនអ្នកចូលគេហទំព័ររបស់យើង និងមើលពីរបៀបប្រើប្រាស់សេវារបស់យើងដោយអ្នកចូលម្នាក់ៗ។ ទាំងនេះជួយឱ្យយើងកែលម្អដំណើរការនៃគេហទំព័ររបស់យើង ជាឧទាហរណ៍ ដោយធានាថាអ្នកអាចស្វែងរកអ្វីដែលអ្នកចង់បានយ៉ាងងាយស្រួល។ អ្នកអាចទទួលយក ឬបដិសេធមិនទទួលយក cookies។ កម្មវិធីរុករកតាមអ៊ីនធឺណិតភាគច្រើនទទួលយក cookies ដោយស្វ័យប្រវត្តិ ប៉ុន្តែជាធម្មតាអ្នកអាចកែប្រែការកំណត់មុខងារកម្មវិធីរុករករបស់អ្នកដើម្បីបដិសេធ​cookies បាន ប្រសិនបើអ្នកចង់ធ្វើដូច្នោះ។ ម៉ឺនុយជំនួយ (Help menu) នៅលើរបារម៉ឺនុយនៃកម្មវិធីរុករកតាមអ៊ីនធឺណិតភាគច្រើននឹងប្រាប់អ្នកពីរបៀបការពារកម្មវិធីរុករករបស់អ្នកមិនឱ្យទទួលយក cookies ថ្មី និងរបៀបឱ្យកម្មវិធីរុករកតាមអ៊ីនធឺណិតជូនដំណឹងដល់អ្នកនៅពេលអ្នកទទួលបាន​ cookie ថ្មី និងរបៀបបិទ cookies ទាំងអស់។
            </Text>
            <Text fontWeight={700}>កម្មវិធី Flash​ cookies៖ - </Text>
            <Text>
            អ្នកអាចកែប្រែការកំណត់មុខងារ Flash Player របស់អ្នកបាន ដើម្បីបង្ការការប្រើប្រាស់ flash cookies។ កម្មវិធីគ្រប់គ្រងការកំណត់មុខងារ Flash Player របស់អ្នក អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងចំណូលចិត្តរបស់អ្នក។ ដើម្បីកុំឱ្យ flash cookies ទទួលមាតិកាពីភាគីទីបីទាំងអស់ សូមចូលទៅកាន់ផ្ទាំង 'ការកំណត់មុខងារផ្ទុកព័ត៌មានសកល ឬហៅថា Global Storage Settings' នៃកម្មវិធីគ្រប់គ្រងការកំណត់មុខងារ (Settings Manager) ហើយលុប select ចេញពីប្រអប់ធីកដែលសរសេរថា 'អនុញ្ញាតឱ្យមាតិកា flash របស់ភាគីទីបី រក្សាទុកព័ត៌មាននៅលើកុំព្យូទ័ររបស់អ្នក' រួចបិទកម្មវិធីគ្រប់គ្រងការកំណត់មុខងារ។ ម៉្យាងវិញទៀត អ្នកក៏អាចកែសម្រួលការកំណត់មុខងាររបស់អ្នកសម្រាប់គេហទំព័រជាក់លាក់ដែលអ្នកចូលតាមរយៈផ្ទាំង 'ការកំណត់មុខងារផ្ទុកព័ត៌មាននៅលើគេហទំព័រ' ដែលឃើញមានផងដែរនៅក្នុងកម្មវិធីគ្រប់គ្រងការកំណត់មុខងារ។
            </Text>
            <Text>
            ប្រសិនបើអ្នកប្រើកម្មវិធី Flash Player ឬកម្មវិធីរុករកបណ្ដាញចាស់ នោះអ្នកអាចនឹងមិនមានកម្មវិធីគ្រប់គ្រងការកំណត់មុខងារទេ។ យើងណែនាំឱ្យអ្នកដំឡើងកម្មវិធី Flash Player និងកម្មវិធីរុករករបស់អ្នកឡើងវិញ ដោយការធ្វើ refresh ដល់កំណែចុងក្រោយបំផុត។ ប្រសិនបើអ្នកជ្រើសរើសបដិសេធមិនទទួលយក     កម្មវិធី cookies នោះអ្នកប្រហែលជាមិនអាចទទួលបានមុខងារអន្តរកម្មពិសេសទាំងអស់នៅលើគេហទំព័ររបស់យើងនោះទេ។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១៣. ការអនុវត្តសកម្មភាពរបស់ភាគីទីបី
            </Text>
            <Text>
            យើងមិនអាចធានាការពារគ្រប់ព័ត៌មានដែលអ្នកផ្តល់ទៅឱ្យគេហទំព័រអនឡាញរបស់ភាគីទីបីដែលបាន​ភ្ជាប់ជាមួយសេវា ឬភ្ជាប់ពីសេវា ឬរាល់ព័ត៌មានប្រមូលដោយភាគីទីបីដែលគ្រប់គ្រងកម្មវិធីសម្ព័ន្ធរបស់យើង (ប្រសិនបើមាន) ឬកម្មវិធីផ្សេងទៀតណាមួយនោះទេ ដោយសារគេហទំព័រអនឡាញរបស់ភាគីទីបីទាំងនេះត្រូវបានគ្រប់គ្រង និងដំណើរការដោយឯករាជ្យ។ រាល់ព័ត៌មានដែលប្រមូលដោយភាគីទីបីទាំងនេះត្រូវបានគ្រប់គ្រងតាមគោលការណ៍ឯកជនភាពរបស់ភាគីទីបីទាំងនោះ (ប្រសិនបើមាន)។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១៤. ការបដិសេធទំនួលខុសត្រូវខាងផ្លូវច្បាប់
            </Text>
            <Text>
            សេវាដំណើរការផ្អែកតាម 'លក្ខខណ្ឌជាក់ស្តែង' និង 'អាចរកបាន' ដោយមិនមានការទទួលខុសត្រូវអ្វីទាំងអស់។ យើងមិនទទួលខុសត្រូវចំពោះព្រឹត្តិការណ៍ទាំងឡាយ ដែលហួសសមត្ថភាពគ្រប់គ្រង​ផ្ទាល់របស់យើង​នោះទេ។ ដោយសារបច្ចេកវិទ្យា និងអាជីវកម្មរបស់យើងមានភាពស្មុគ្រស្មាញ និងផ្លាស់ប្តូរជានិច្ច ដូច្នេះយើង​មិនអាចធានា ហើយក៏មិនអះអាងថា មិនមានកំហុសឆ្គងណាមួយកើតឡើងទាក់ទងនឹងឯកជនភាពនៃព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នកនោះដែរ ហើយយើងនឹងមិនទទួលខុសត្រូវចំពោះការខូចខាតណាមួយឡើយមិនថាដោយប្រយោល ជាយថាហេតុ ឬជាផលវិបាក ឬជាការពិន័យ ដែលទាក់ទងនឹងការប្រើប្រាស់ ឬការបញ្ចេញព័ត៌មានផ្ទាល់ខ្លួនឡើយ។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១៥. ការយល់ព្រមលើគោលការណ៍ឯកជនភាព
            </Text>
            <Text>
            ករណីដែលអ្នកប្រើប្រាស់សេវារបស់យើង គឺជាការព្រមព្រៀងតាមគោលការណ៍ឯកជនភាពរបស់យើង។
            </Text>
            <Text>
            នេះគឺជាគោលការណ៍ឯកជនភាពទាំងស្រុង និងផ្តាច់មុខរបស់យើង ហើយត្រូវនិរាករណ៍រាល់ច្បាប់ មុនៗទាំងអស់។ គោលការណ៍ឯកជនភាពនេះត្រូវអានភ្ជាប់ជាមួយប្រការ និងលក្ខខណ្ឌរបស់យើង រួមទាំងរាល់លក្ខខណ្ឌបន្ថែមជាធរមានដែលបង្ហោះនៅលើវេទិការបស់យើង។ យើងអាចធ្វើការកែប្រែគោលការណ៍ឯកជនភាពនេះជាទៀងទាត់ ហើយនឹងជូនដំណឹងដល់អ្នកអំពីការកែប្រែទាំងនេះដោយបង្ហោះលក្ខខណ្ឌដែលបាន      កែប្រែរួចនៅលើវេទិការបស់យើង។ ករណីដែលអ្នកនៅតែបន្តប្រើប្រាស់សេវារបស់យើងដែលជាលទ្ធផលនៃការកែប្រែគោលការណ៍ឯកជនភាពនេះ ត្រូវចាត់ទុកថាអ្នកបានយល់ព្រមទទួលយកដូចគ្នា។ យើងសូមណែនាំឱ្យអ្នកចូលមើលគោលការណ៍ឯកជនភាពនេះឡើងវិញជាទៀងទាត់។
            </Text>
          </Box>
          <Box>
            <Text fontSize={[16, 16, 19, 19]} fontWeight={600}>
            ១៦. គេហទំព័រផ្សេងទៀត
            </Text>
            <Text>
            គេហទំព័ររបស់យើងអាចមានតំណភ្ជាប់ទៅកាន់គេហទំព័រផ្សេងទៀត ដែលហួសពីការគ្រប់គ្រងរបស់យើង ហើយមិនស្ថិតក្រោមគោលការណ៍ឯកជនភាពនេះទេ។ ប្រសិនបើអ្នកចូលទៅកាន់គេហទំព័រផ្សេងទៀតដោយប្រើតំណភ្ជាប់ដែលបានផ្តល់ នោះប្រតិបត្តិករនៃគេហទំព័រទាំងនេះអាចប្រមូលព័ត៌មានពីអ្នក និងប្រើព័ត៌មានទាំងនោះស្របតាមគោលការណ៍ឯកជនភាពរបស់ពួកគេ ដែលអាចខុសពីគេហទំព័ររបស់យើង។ យើងមិនទទួលខុសត្រូវចំពោះការប្រមូលព័ត៌មានណាមួយ ដោយគេហទំព័រទាំងនេះទេ។ មានតែប្រតិបត្តិករនៃ គេហទំព័រទាំងនេះប៉ុណ្ណោះដែលត្រូវទទួលខុសត្រូវចំពោះមុខងាររបស់ពួកគេ ឬកំហុសដែលអាចកើតមាននៅលើគេហទំព័រដែលបានភ្ជាប់។
            </Text>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default PrivacyPolicy;
