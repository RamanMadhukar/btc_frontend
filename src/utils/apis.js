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

            console.log(DateDifference(new Date(plans.date_till_rewarded), today), today, new Date(plans.date_till_rewarded));

            console.log(today > new Date(plans.date_till_rewarded));

            if (today < new Date(plans.fullTime) && today > new Date(plans.date_till_rewarded)) {
                console.log('run1');
                if (plans.plan_cycle === 35) {
                    console.log('run2');

                    if (DateDifference(new Date(plans.date_till_rewarded), today) !== 0) {

                        console.log('run3');
                        earn += plans.plan_daily_earning
                        return {
                            ...plans, date_till_rewarded: today
                        }
                    }

                    return {
                        ...plans
                    }
                }

                else {

                    console.log('run4');
                    return {
                        ...plans, date_till_rewarded: today
                    }
                }

            }

            if (today > new Date(plans.fullTime)) {
                console.log('run5');
                return { ...plans }
            }

            if (DateDifference(today, new Date(plans.fullTime)) === 0 && today > new Date(plans.date_till_rewarded) && today.getDate() !== new Date(plans.date_till_rewarded).getDate()) {
                console.log('run6');
                if (plans.plan_cycle === 35) {
                    earn += plans.plan_daily_earning
                }
                else {
                    earn += plans.plan_daily_earning * plans.plan_cycle * plans.quantity;
                }

                return {
                    ...plans,
                    date_till_rewarded: today
                }
            }

            console.log('run7');
            return {
                ...plans,
                date_till_rewarded: today
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