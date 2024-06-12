import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredData } from '../../Utilities/StoredReadBooks';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
const PagesToRead = () => {
    const [names, setNames] = useState([]);
    const [pages, setpages] = useState([]);
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const allData = useLoaderData();
    useEffect(() => {
        const locals = getStoredData();
        const nothingName = [];
        const nothingPage = [];
        for (const localData of locals) {
            // console.log(localData);
            allData.filter(data => data.bookId === localData &&
                nothingPage.push(data.totalPages)
            );
            allData.filter(data => data.bookId === localData &&
                nothingName.push(data.bookName)
            );
            setNames(nothingName);
            setpages(nothingPage);
        }
        }, [allData])
    const data=[
        {
            name: `${names[0]}`,
            uv: `${pages[0]}`
        },
        {
            name: `${names[1]}`,
            uv: `${pages[1]}`
        },
        {
            name: `${names[2]}`,
            uv: `${pages[2]}`
        },
        {
            name: `${names[3]}`,
            uv: `${pages[3]}`
        },
        {
            name: `${names[4]}`,
            uv: `${pages[4]}`
        },
        {
            name: `${names[5]}`,
            uv: `${pages[5]}`
        },
        {
            name: `${names[6]}`,
            uv: `${pages[6]}`
        },
        {
            name: `${names[7]}`,
            uv: `${pages[7]}`
        },
        {
            name: `${names[8]}`,
            uv: `${pages[8]}`
        }
    ]
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='bg-base-200 w-auto flex justify-center pt-12 mt-5 ml-5 rounded-xl'>
            <BarChart className='work-sans text-xs'
                width={2000}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='name' />
                <YAxis/>
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};
export default PagesToRead;