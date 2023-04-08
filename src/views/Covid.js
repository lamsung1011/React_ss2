import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';


const Covid = () => {


    const [dataCovid, setDataCovid] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);

    useEffect(async () => {
        try {
            // setTimeout(async () => {
            let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to2021-10-20T00:00:00Z')
            let data = res && res.data ? res.data : [];
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY')
                    return item;
                })
                data = data.reverse()
            }
            setDataCovid(data);
            setIsLoading(false);
            setIsError(false)

            // }, 3500)
        } catch (e) {
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

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