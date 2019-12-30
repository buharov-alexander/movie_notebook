package ru.buharov.mnb.common.service;

import com.fasterxml.jackson.databind.JsonNode;

public interface RequestService {
    JsonNode getJson(String url);

    byte[] getByteArray(String url);
}
