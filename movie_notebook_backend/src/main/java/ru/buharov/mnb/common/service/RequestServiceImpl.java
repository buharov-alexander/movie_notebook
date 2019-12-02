package ru.buharov.mnb.common.service;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import ru.buharov.mnb.common.exception.MnbInternalException;

@Service
class RequestServiceImpl implements RequestService {

    private ObjectMapper mapper = new ObjectMapper();
    private Logger log = LoggerFactory.getLogger(RequestServiceImpl.class);

    @Override
    public JsonNode getJson(String url) {
        assert url != null;

        try (InputStream is = new URL(url).openStream()) {
            return mapper.readTree(is);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new MnbInternalException(e);
        }
    }
}
