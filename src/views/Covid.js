import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";


const Covid = () => {
    const today = moment().startOf('day').toISOString(true);;
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    // const today = new Date(new Date().setHours(0, 0, 0, 0));
    // const priorDate = moment().subtract(31, 'days');


    const { data: dataCovid, isLoading, isError }
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)
    // = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`)
    // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to2021-10-20T00:00:00Z')


    return (
        <>
            <h2>Covid-19 Tracking in Việt Nam</h2 >
            < table >
                {console.log('check data covid', dataCovid)}
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovers</th>
                    </tr>
                </thead>
                <tbody>



                    {
                        isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovers}</td>
                                </tr>
                            )
                        })
                    }
                    {isLoading === true && <tr><td colSpan='5' style={{ 'textAlign': 'center' }}>Loading...</td></tr>}

                    {isError === true && <tr><td colSpan='5' style={{ 'textAlign': 'center' }}>Something wrong !!!</td></tr>}

                </tbody>
            </table >
        </>


    )




}


export default Covid;