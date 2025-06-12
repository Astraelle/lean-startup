const Article = require('../models/article.model');

exports.createArticle = async (req, res) =>{
    const {title, content} = req.body;
    
    if(!title || !content){
        return res.status(400).json({
            message: "Titre et contenu requis"
        });
    }

    try {
        const newArticle = new Article({
            title,
            content,
            authorId: req.user.id
        });

        await newArticle.save();

        res.status(201).json({
            message: "Article créé avec succès"
        });

    } catch (err) {
        res.status(500).json({
            message: "Une erreur est survenue coté serveur"
        });
    }
}

exports.getAllArticles = async (req, res) =>{
    try {
        const article = await Article.find().populate('authorId', 'username email').sort({createdAt: -1});
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({
            message: "Une erreur est survenue coté serveur"
        });
    }
}

exports.getArticleById = async (req, res) => {
  try {
    const post = await Article.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Article introuvable' });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
