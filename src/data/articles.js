// data/articles.js

const articles = [
    { id: 1, title: 'Exam time',
        content: `It was exam time at Joe's school.
                Every day, their teacher gave them loads of homework and told them they should be working hard so as to do well in their tests.
                Joe didn't take any notice. He reckoned he would rather be playing football.
                He didn't care if he came bottom in the exams.
                His mum and dad told him that he should be working harder but the weather was sunny and Joe had better things to do.
                "Shall we go to the park?" he said to his friend Finn one afternoon. "We could take a football and have a kick around."
                Finn shook his head.
                "I need to revise," he said. "I'm going home to do some maths."
                Joe was amazed. "You'd rather do maths than football?"
                "Maths is important. Besides, my mum says she'll buy me a mountain bike if I do well."
                "That's crazy," said Joe.
                Finn shrugged. "Wait until I beat you in the test and you watch me riding past on my mountain bike!"
                "You won't beat me," said Joe.
                "Oh yes I will."
                "Oh no you won't! Just you wait and see!"
                For the first time ever, Joe wanted to do well. He couldn't bear it if Finn came top and he did badly. So when he got home, he opened his maths book.
                There was so much to do.
                Suddenly, he felt like he'd forgotten everything he'd learnt that year! He couldn't think where to start.
                He was still sitting there when Bella came in chasing Caspar the kitten.
                "You don't look happy," she said. "Your mouth is all sad."
                "You wouldn't be happy either if you had to learn all this maths," said Joe.
                "I would just use my magic pencil. It always gets the right answer."
                "That's silly! There's no such thing as a magic pencil."
                "Yes, there is. Look, I'll show you."
                Bella ran out of the room and came back carrying a shiny, silver pencil with a fluffy unicorn stuck to one end. "What a silly thing," thought Joe.
                But Bella was beaming and he didn't want to hurt her feelings. So he picked up the pencil and looked at the maths question. To his surprise, he saw the answer straight away.
                After that, Joe worked hard every evening.
                On the day of the maths test, Bella said, "You can use my magic pencil if you like."
                "No way. I don't need your pencil," said Joe rudely. He was thinking about how much his friends would laugh if he came to school with a fluffy unicorn pencil.
                Bella was cross. "All right then, I'm not lending it to you!"
                "Fine by me!"
                When Joe arrived at school, everyone was talking about how much work they'd done. Finn kept grinning at him. The look that said, "I'm coming top, just you wait and see!"
                Joe began to panic. He sat down at his desk, opened the test paper – and felt like he couldn't do a single question.
                There was a knock at the door.
                "What is it, Bella?" asked Joe's teacher. "We're busy now."
                "Just something Joe forgot," said Bella. Before anyone could stop her she skipped over and put her magic pencil on Joe's desk. She grinned at Joe as she left.
                Joe picked up the pencil. He looked at the fluffy unicorn and could feel himself calming down.
                He knew it wasn't really magic, but somehow he could do all the maths questions after all.
                When the results came out, Joe had done even better than Finn.
                "Well done!" said Mum. "I knew you could do well if you tried. We could go to a movie to celebrate, and you can choose which one."
                "I think Bella should choose," Joe said. "I'd never have done it without her magic pencil!"`},
    { id: 2, title: 'Shopping trip', content: 'This is the full content of Shopping trip.' },
    { id: 3, title: 'Rainy day', content: 'This is the full content of Rainy day.' },
    { id: 4, title: 'School trip', content: 'This is the full content of School trip.' },
    { id: 5, title: 'Camping', content: 'This is the full content of Camping.' },
    { id: 6, title: 'No Pets Here', content: 'This is the full content of No Pets Here.' },
    { id: 7, title: 'Sick Day', content: 'This is the full content of Sick Day.' },
    { id: 8, title: 'Football Match', content: 'This is the full content of Football Match.' },
    { id: 9, title: 'Back to School', content: 'This is the full content of Back to School.' },
    { id: 10, title: 'The Robot', content: 'This is the full content of The Robot.' },
    { id: 11, title: 'Nell’s Books', content: 'This is the full content of Nell’s Books.' },
    { id: 12, title: 'Little Monsters', content: 'This is the full content of Little Monsters.' },

];

export function getArticleById(id) {
    return articles.find(article => article.id === parseInt(id));
}

export default articles;
