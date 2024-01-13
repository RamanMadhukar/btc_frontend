import axios from "axios";
import BASE_URL from "../api_url";
axios.defaults.baseURL = BASE_URL;

const DateDifference = (date1, date2) => {

    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    return Difference_In_Days;
}

const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const getuserearn = async () => {

    var plans_purchased = []
    var earn = 0;
    const today = new Date();


    await axios.post(`/get_user`, { user_id: localStorage.getItem('uid') }).then(async (responce) => {
        plans_purchased = responce.data.plans_purchased;
        plans_purchased = plans_purchased.map((plans, index) => {

            // if (today < new Date(plans.fullTime) && today > new Date(plans.date_till_rewarded) && today.getDate() !== new Date(plans.date_till_rewarded).getDate()) {
            //     if (plans.plan_cycle === 35) {

            //         if (DateDifference(new Date(plans.date_till_rewarded), today) !== 0) {

            //             earn += plans.plan_daily_earning
            //             return {
            //                 ...plans, date_till_rewarded: today
            //             }
            //         }

            //         return {
            //             ...plans
            //         }
            //     }

            //     else {

            //         return {
            //             ...plans, date_till_rewarded: today
            //         }
            //     }

            // }

            // if (today > new Date(plans.fullTime)) {
            //     return { ...plans }
            // }

            // if (DateDifference(today, new Date(plans.fullTime)) === 0 && today > new Date(plans.date_till_rewarded) && today.getDate() !== new Date(plans.date_till_rewarded).getDate()) {
            //     if (plans.plan_cycle === 35) {
            //         earn += plans.plan_daily_earning
            //     }
            //     else {
            //         earn += plans.plan_daily_earning * plans.plan_cycle * plans.quantity;
            //     }

            //     return {
            //         ...plans,
            //         date_till_rewarded: today
            //     }
            // }

            // return {
            //     ...plans,
            //     date_till_rewarded: today
            // }

            if (today < new Date(plans.fullTime)) {
                if (plans.plan_cycle === 35) {

                    if (new Date(plans.fullTime).getHours() !== new Date(plans.date_till_rewarded).getHours() &&
                        new Date(plans.fullTime).getMinutes() !== new Date(plans.date_till_rewarded).getMinutes() &&
                        new Date(plans.fullTime).getSeconds() !== new Date(plans.date_till_rewarded).getSeconds()
                    ) {
                        earn += plans.plan_daily_earning
                        console.log('run');
                        return {
                            ...plans, date_till_rewarded: today.setHours(new Date(plans.fullTime).getHours(), new Date(plans.fullTime).getMinutes(), new Date(plans.fullTime).getSeconds())
                        }
                    }

                }
            }
            // console.log(new Date(plans.fullTime).getHours());
            // console.log(new Date(plans.fullTime).getMinutes());
            // console.log(new Date(plans.fullTime).getSeconds());
            return {
                ...plans,
                date_till_rewarded: today.setHours(new Date(plans.fullTime).getHours(), new Date(plans.fullTime).getMinutes(), new Date(plans.fullTime).getSeconds())
            }



        })
        await axios.post(`/update_earning`, {
            earn: earn,
            temp: plans_purchased,
            user_id: localStorage.getItem('uid')
        })
            .then(() => console.log('Reward successfully updated'))
            .catch(error => console.log('Some error Occured'));
    }).catch(error => {
        console.log('data not find');
    });


};