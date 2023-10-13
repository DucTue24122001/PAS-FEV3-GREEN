import { createSlice } from "@reduxjs/toolkit";
import { LoginShowEnum, PoliciesEnum, PromotionDetailEnum } from "../components/constants/enum";
import { AnnounceType, PromotionDetail, PromotionType, SliderType } from "../components/constants/type";


export const clientSlice = createSlice({
    name: "client",
    initialState: {
        tenancy: <Tenancy>{},
        isShowLoginModal: false,
        currentSectionShow: <LoginShowEnum>"",
        isShowLanguageModal:false,
        languageList: <string[]>[],
        language: "EN",
        //slider
        slider: <SliderType[]>[],
        //anouncement
        announcementList: <AnnounceType[]>[],
        //policies
        currentPolicies: <PoliciesEnum>"",
        //promotion
        promotionList: <PromotionType[]>[],
        currentPromo: <PromotionType>{},
        isShowPromoModal: false,
        promotionCheck: false,
        allPromoType: <string[]>[],
        currentBonus: <number>0,
        currentTurnover: <number>0,
        currentMinDeposit: <number>0,
        currentMaxBonus: <number>0,
    },
    reducers: {
        setLanguageList(state, action) {
            state.languageList = action.payload
        },
        setLanguage(state, action) {
            state.language = action.payload
        },

        setTenancy(state, action) {
            state.tenancy = action.payload
        },
        handleShowPromoModal(state, action) {
            state.isShowPromoModal = action.payload
        },
        setCurrentPromo(state, action) {
            const currentPromotion = action.payload
            state.currentPromo = currentPromotion
            if (currentPromotion?.detailPromotion) {
                const bonusObj = currentPromotion.detailPromotion.find((detail: PromotionDetail) => detail.key.toLowerCase() === PromotionDetailEnum.BONUS)
                const turnoverObj = currentPromotion.detailPromotion.find((detail: PromotionDetail) => detail.key.toLowerCase() === PromotionDetailEnum.TURNOVER)
                const minDepositObj = currentPromotion.detailPromotion.find((detail: PromotionDetail) => detail.key.toLowerCase() === PromotionDetailEnum.MINDEPO)
                const maxBonusObj = currentPromotion.detailPromotion.find((detail: PromotionDetail) => detail.key.toLowerCase() === PromotionDetailEnum.MAXBONUS)
                if (bonusObj && turnoverObj) {
                    state.currentBonus = +bonusObj.value.replace(/[^0-9]/g, "")
                    state.currentTurnover = +turnoverObj.value.replace(/[^0-9]/g, "")
                }
                if (minDepositObj) {
                    state.currentMinDeposit = +minDepositObj.value.replace(/[^0-9]/g, "")
                }
                if (maxBonusObj) {
                    state.currentMaxBonus = +maxBonusObj.value.replace(/[^0-9]/g, "")
                }
            }
        },
        buyPromoFunctionHandler(state, action) {
            const promoFunction = action.payload
            state.promotionCheck = !state.promotionCheck
            state.currentPromo = {...state.currentPromo, statusPromotion: promoFunction.status}
            state.promotionList = state.promotionList.map((promo: PromotionType) => {
              if (promo.id === promoFunction.id) {
                return {...promo, statusPromotion: promoFunction.status}
              }
              return promo
            })
          }
    }

})

export const clientAction = clientSlice.actions
type Tenancy = {
    appName: string,
    areaCode: string,
    currency: string,
    id: number,
    logo: string,
    mainColor: string,
    name: string,
    tenancyName: string
}


