from configparser import ConfigParser

#reads config file and returns dictionary object
def read_db_config(filename='config.ini', section='mysql'):

    #creates parser and reads config.ini
    parser = ConfigParser()
    parser.read(filename)

    db = {}
    
    if parser.has_section(section):
        items = parser.items(section)
        for item in items:
            db[item[0]] = item[1]
    else:
        raise Exception('{0} not found in the {1} file'.format(section, filename))

    return db
