from sqlalchemy import *
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()
global session

class DBTask(Base):
    __tablename__ = 'tasks'
    uuid = Column(UUID, primary_key=True,
                       server_default=text('gen_random_uuid()'))
    userId = Column(VARCHAR, nullable=False)
    title = Column(VARCHAR, nullable=False)
    type = Column(VARCHAR, nullable=False)
    start = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    end = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    deadline = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    est = Column(INTEGER, nullable=False)
    actualTime = Column(INTEGER, nullable=False)
    description = Column(VARCHAR, nullable=False)
    done = Column(BOOLEAN, nullable=False)

    createdAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    updatedAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'), onupdate=datetime.utcnow)
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    
class DBSchedule(Base):
    __tablename__ = 'schedules'
    uuid = Column(UUID, primary_key=True,
                       server_default=text('gen_random_uuid()'))
    userId = Column(VARCHAR, nullable=False)
    title = Column(VARCHAR, nullable=False)
    start = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    end = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    description = Column(VARCHAR, nullable=False)

    createdAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    updatedAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'), onupdate=datetime.utcnow)
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
class DBUser(Base):
    __tablename__ = 'users'
    uuid = Column(UUID, primary_key=True,
                       server_default=text('gen_random_uuid()'))
    id = Column(VARCHAR, nullable=False)
    password = Column(VARCHAR, nullable=False)
    nickname = Column(VARCHAR, nullable=False)
    password = Column(VARCHAR, nullable=False)
    createdAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    updatedAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'), onupdate=datetime.utcnow)
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

def init_db(uri):
    global session
    engine = create_engine(uri)
    db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False,
                                             bind=engine))
    Base.query = db_session.query_property()
    Base.metadata.create_all(bind=engine)
    session = db_session
    return db_session

def Session():
    global session
    if session is None:
        raise NotImplementedError
    return session
