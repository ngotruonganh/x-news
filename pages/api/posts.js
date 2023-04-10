import dataSection1 from '../../mocks/resData/dataSection1.json'
import dataSection2 from '../../mocks/resData/dataSection2.json'
import dataSection3 from '../../mocks/resData/dataSection3.json'
import dataSection4 from '../../mocks/resData/dataSection4.json'
import dataSection5 from '../../mocks/resData/dataSection5.json'
import dataSection6 from '../../mocks/resData/dataSection6.json'
import { sleep } from '../../utils/func'

async function getHome() {
    await sleep(1000)
    return {
        dataSection1: dataSection1.data,
        dataSection2: dataSection2.data,
        dataSection3: dataSection3.data,
        dataSection4: dataSection4.data,
        dataSection5: dataSection5.data,
        dataSection6: dataSection6.data,
    }
}

async function getPostsDetail() {
    return {
        title: "After all is said and done, more is done",
        author: "FindTechX",
        lastestUpdate: "27 Mar 2023",
        content: ``
    }
}



export {
    getHome,
    getPostsDetail
}