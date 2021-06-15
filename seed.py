from app import app
from models import db, connect_db, Cupcake

db.drop_all()
db.create_all()

c1 = Cupcake(
    flavor="cherry",
    size="large",
    rating=5
)

c2 = Cupcake(
    flavor="chocolate",
    size="small",
    rating=9,
    image="https://www.bakedbyrachel.com/wp-content/uploads/2018/01/chocolatecupcakesccfrosting1_bakedbyrachel.jpg"
)

c3 = Cupcake(
    flavor="vanilla",
    size="medium",
    rating=8
)

c4 = Cupcake(
    flavor="carrot cake",
    size="large",
    rating=6
)

c5 = Cupcake(
    flavor="swirl",
    size="medium",
    rating=2
)

db.session.add_all([c1, c2, c3, c4, c5])
db.session.commit()