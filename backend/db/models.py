from sqlalchemy import *
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
from openapi_server.models.schedule import Schedule  # noqa: E501
from openapi_server.models.task import Task  # noqa: E501


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
    color = Column(VARCHAR, nullable=False)
    createdAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    updatedAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'), onupdate=datetime.utcnow)
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    def from_task(self, task: Task):
        self.userId = task.user_id
        self.title = task.title
        self.type = task.type
        self.start = task.start
        self.end = task.end
        self.deadline = task.deadline
        self.est = task.est
        self.actualTime = task.actual_time
        self.description = task.description
        self.done = task.done
        self.color = task.color
    def to_task(self):
        task = Task()
        task.user_id = self.userId 
        task.uuid = self.uuid
        task.title = self.title 
        task.type = self.type 
        task.start = self.start 
        task.end = self.end 
        task.deadline = self.deadline
        task.est = self.est
        task.actual_time = self.actualTime
        task.description = self.description 
        task.color = self.color
        return task
    
    
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
    color = Column(VARCHAR, nullable=False)
    createdAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'))
    updatedAt = Column(TIMESTAMP, nullable=False, server_default=text(
        'CURRENT_TIMESTAMP'), onupdate=datetime.utcnow)
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    def from_schedule(self, schedule: Schedule):
        self.userId = schedule.user_id
        self.title = schedule.title
        self.start = schedule.start
        self.end = schedule.end
        self.description = schedule.description
        self.color = schedule.color

    def to_schedule(self):
        schedule = Schedule()
        schedule.uuid =self.uuid
        schedule.user_id =self.userId
        schedule.title =self.title
        schedule.start =self.start
        schedule.end =self.end
        schedule.description =self.description
        schedule.color = self.color
        return schedule
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