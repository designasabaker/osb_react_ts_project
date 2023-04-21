import Image1 from '../assets/images/ocean.jpg';


interface Story {
    id: number;
    title: string;
    content: string;
    img: string;
}

interface HomePageData {
    id: string;
    name: string;
    contents: Story[];
}

export const HomePageStories: HomePageData = {
    id: 'home1',
    name: 'homePageData',
    contents: [
        {
            id: 1,
            title: 'Our Ingredients.tsx',
            content: "Our team of experienced chemists and researchers collaborate to develop groundbreaking solutions that meet the highest quality and safety standards. Through rigorous research, technology, and a commitment to sustainability, we continue to push the boundaries of what's possible in the world of chemistry.",
            img: Image1,
        },
        {
            id: 2,
            title: 'From Rhode Island',
            content: "Founded by a chemistry professor from the University of Rhode Island, our innovative solutions are tailored to meet the ever-evolving demands of various industries. Explore our extensive collection of high-quality active ingredients and learn how we're shaping the future of chemistry from our base in Rhode Island.",
            img: Image1,
        },
    ],
};

export const HomePageProducts = [
    {
        id: 1,
        title: 'New Product',
        caption: "Our team of experienced chemists and researchers collaborate to develop groundbreaking solutions that meet the highest quality and safety standards. Through rigorous research, technology, and a commitment to sustainability, we continue to push the boundaries of what's possible in the world of chemistry.",
        contents:[
            {
                id: 1,
                title: 'Maplifa',
                content: 'Anti-aging, whitening, anti-oxidation',
                img: Image1,
            },
            {
                id: 2,
                title: 'SHAPE',
                content: 'anti-inflammatory, acne',
                img: Image1,
            },
            {
                id: 3,
                title: 'Preny-Good',
                content: 'anti-inflammatory, whitening',
                img: Image1,
            }
        ]
    },
    {
        id: 2,
        title: 'Breakthrough',
        caption: "The extract developed by OSB can effectively remove the skin damage caused by ferroptosis, improve skin vitality, and restore skin health. This type of product will bring a revolutionary breakthrough in cosmetic raw materials like Bosein.",
        contents:[
            {
                id:1,
                title: '',
                content: 'Anti-aging mechanism of ferroptosis',
                img:"",
            },
            {
                id:2,
                title: '',
                content: 'Sustainability: OSB believes that sustainable active ingredients are at the core of the competitiveness of cosmetics today.',
                img:"",
            }
        ]
    },
]

export const HomePageNews = {
    title: "Our News",
    caption:"Our team of experienced chemists and researchers collaborate to develop groundbreaking solutions that meet the highest quality and safety standards. Through rigorous research, technology, and a commitment to sustainability, we continue to push the boundaries of what's possible in the world of chemistry.",
    contents: [
    {
        id: 1,
        title: 'Maplifa',
        content: 'Anti-aging, whitening, anti-oxidation',
        img: Image1,
    },
    {
        id: 2,
        title: 'SHAPE',
        content: 'anti-inflammatory, acne',
        img: Image1,
    },
    {
        id: 3,
        title: 'Preny-Good',
        content: 'anti-inflammatory, whitening',
        img: Image1,
    },
    {
        id: 4,
        title: 'Preny-Good',
        content: 'anti-inflammatory, whitening',
        img: Image1,
    },
    {
        id: 5,
        title: 'Preny-Good',
        content: 'anti-inflammatory, whitening',
        img: Image1,
    },
    {
        id: 6,
        title: 'Preny-Good',
        content: 'anti-inflammatory, whitening',
        img: Image1,
    }]}
